	ninja.wallets.paperwallet = {
					open: function () {
						document.getElementById("main").setAttribute("class", "paper"); // add 'paper' class to main div
						var paperArea = document.getElementById("paperarea");
						paperArea.style.display = "block";
						var perPageLimitElement = document.getElementById("paperlimitperpage");
						var limitElement = document.getElementById("paperlimit");
						var pageBreakAt = (ninja.wallets.paperwallet.useArtisticWallet) ? ninja.wallets.paperwallet.pageBreakAtArtisticDefault : ninja.wallets.paperwallet.pageBreakAtDefault;
						if (perPageLimitElement && perPageLimitElement.value < 1) {
							perPageLimitElement.value = pageBreakAt;
						}
						if (limitElement && limitElement.value < 1) {
							limitElement.value = pageBreakAt;
						}
						if (document.getElementById("paperkeyarea").innerHTML == "") {
							document.getElementById("paperpassphrase").disabled = true;
							document.getElementById("paperencrypt").checked = false;
							ninja.wallets.paperwallet.encrypt = false;
							ninja.wallets.paperwallet.build(pageBreakAt, pageBreakAt, !document.getElementById('paperart').checked, document.getElementById('paperpassphrase').value);
						}
					},

					close: function () {
						document.getElementById("paperarea").style.display = "none";
						document.getElementById("main").setAttribute("class", ""); // remove 'paper' class from main div
					},

					remaining: null, // use to keep track of how many addresses are left to process when building the paper wallet
					count: 0,
					pageBreakAtDefault: 7,
					pageBreakAtArtisticDefault: 3,
					useArtisticWallet: true,
					pageBreakAt: null,

					build: function (numWallets, pageBreakAt, useArtisticWallet, passphrase) {
						if (numWallets < 1) numWallets = 1;
						if (pageBreakAt < 1) pageBreakAt = 1;
						ninja.wallets.paperwallet.remaining = numWallets;
						ninja.wallets.paperwallet.count = 0;
						ninja.wallets.paperwallet.useArtisticWallet = useArtisticWallet;
						ninja.wallets.paperwallet.pageBreakAt = pageBreakAt;
						document.getElementById("paperkeyarea").innerHTML = "";
						if (ninja.wallets.paperwallet.encrypt) {
							document.getElementById("busyblock").className = "busy";
							ninja.privateKey.BIP38GenerateIntermediatePointAsync(passphrase, null, null, function (intermediate) {
								ninja.wallets.paperwallet.intermediatePoint = intermediate;
								document.getElementById("busyblock").className = "";
								setTimeout(ninja.wallets.paperwallet.batch, 0);
							});
						}
						else {
							setTimeout(ninja.wallets.paperwallet.batch, 0);
						}
					},

					batch: function () {
						if (ninja.wallets.paperwallet.remaining > 0) {
							var paperArea = document.getElementById("paperkeyarea");
							ninja.wallets.paperwallet.count++;
							var i = ninja.wallets.paperwallet.count;
							var pageBreakAt = ninja.wallets.paperwallet.pageBreakAt;
							var div = document.createElement("div");
							div.setAttribute("id", "keyarea" + i);
							if (ninja.wallets.paperwallet.useArtisticWallet) {
								div.innerHTML = ninja.wallets.paperwallet.templateArtisticHtml(i);
								div.setAttribute("class", "keyarea art");
							}
							else {
								div.innerHTML = ninja.wallets.paperwallet.templateHtml(i);
								div.setAttribute("class", "keyarea");
							}
							if (paperArea.innerHTML != "") {
								// page break
								if ((i - 1) % pageBreakAt == 0 && i >= pageBreakAt) {
									var pBreak = document.createElement("div");
									pBreak.setAttribute("class", "pagebreak");
									document.getElementById("paperkeyarea").appendChild(pBreak);
									div.style.pageBreakBefore = "always";
									if (!ninja.wallets.paperwallet.useArtisticWallet) {
										div.style.borderTop = "2px solid green";
									}
								}
							}
							document.getElementById("paperkeyarea").appendChild(div);
							ninja.wallets.paperwallet.generateNewWallet(i);
							ninja.wallets.paperwallet.remaining--;
							setTimeout(ninja.wallets.paperwallet.batch, 0);
						}
					},

					// generate bitcoin address, private key, QR Code and update information in the HTML
					// idPostFix: 1, 2, 3, etc.
					generateNewWallet: function (idPostFix) {
						if (ninja.wallets.paperwallet.encrypt) {
							ninja.privateKey.BIP38GenerateECAddressAsync(ninja.wallets.paperwallet.intermediatePoint, false, function (address, encryptedKey) {
								if (ninja.wallets.paperwallet.useArtisticWallet) {
									ninja.wallets.paperwallet.showArtisticWallet(idPostFix, address, encryptedKey);
								}
								else {
									ninja.wallets.paperwallet.showWallet(idPostFix, address, encryptedKey);
								}
							});
						}
						else {
							var key = new Bitcoin.ECKey(false);
							var bitcoinAddress = key.getBitcoinAddress();
							var privateKeyWif = key.getBitcoinWalletImportFormat();
							if (ninja.wallets.paperwallet.useArtisticWallet) {
								ninja.wallets.paperwallet.showArtisticWallet(idPostFix, bitcoinAddress, privateKeyWif);
							}
							else {
								ninja.wallets.paperwallet.showWallet(idPostFix, bitcoinAddress, privateKeyWif);
							}
						}
					},

					templateHtml: function (i) {
						var privateKeyLabel = ninja.translator.get("paperlabelprivatekey");
						if (ninja.wallets.paperwallet.encrypt) {
							privateKeyLabel = ninja.translator.get("paperlabelencryptedkey");
						}

						var walletHtml =
											"<div class='public'>" +
												"<div id='qrcode_public" + i + "' class='qrcode_public'></div>" +
												"<div class='pubaddress'>" +
													"<span class='label'>" + ninja.translator.get("paperlabelbitcoinaddress") + "</span>" +
													"<span class='output' id='btcaddress" + i + "'></span>" +
												"</div>" +
											"</div>" +
											"<div class='private'>" +
												"<div id='qrcode_private" + i + "' class='qrcode_private'></div>" +
												"<div class='privwif'>" +
													"<span class='label'>" + privateKeyLabel + "</span>" +
													"<span class='output' id='btcprivwif" + i + "'></span>" +
												"</div>" +
											"</div>";
						return walletHtml;
					},

					showWallet: function (idPostFix, bitcoinAddress, privateKey) {
						document.getElementById("btcaddress" + idPostFix).innerHTML = bitcoinAddress;
						document.getElementById("btcprivwif" + idPostFix).innerHTML = privateKey;
						var keyValuePair = {};
						keyValuePair["qrcode_public" + idPostFix] = bitcoinAddress;
						keyValuePair["qrcode_private" + idPostFix] = privateKey;
						ninja.qrCode.showQrCode(keyValuePair);
						document.getElementById("keyarea" + idPostFix).style.display = "block";
					},

					templateArtisticHtml: function (i) {
						var keyelement = 'btcprivwif';
						var image='data:image/png;base64,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';

						if (ninja.wallets.paperwallet.encrypt) {
							keyelement = 'btcencryptedkey'
						}

						var walletHtml =
											"<div class='artwallet' id='artwallet" + i + "'>" +
						//"<iframe src='bitcoin-wallet-01.svg' id='papersvg" + i + "' class='papersvg' ></iframe>" +
												"<img id='papersvg" + i + "' class='papersvg' src='" + image + "' />" +
												"<div id='qrcode_public" + i + "' class='qrcode_public'></div>" +
												"<div id='qrcode_private" + i + "' class='qrcode_private'></div>" +
												"<div class='btcaddress' id='btcaddress" + i + "'></div>" +
												"<div class='" + keyelement + "' id='" + keyelement + i + "'></div>" +
											"</div>";
						return walletHtml;
					},

					showArtisticWallet: function (idPostFix, bitcoinAddress, privateKey) {
						var keyValuePair = {};
						keyValuePair["qrcode_public" + idPostFix] = bitcoinAddress;
						keyValuePair["qrcode_private" + idPostFix] = privateKey;
						ninja.qrCode.showQrCode(keyValuePair, 2.5);
						document.getElementById("btcaddress" + idPostFix).innerHTML = bitcoinAddress;

						if (ninja.wallets.paperwallet.encrypt) {
							var half = privateKey.length / 2;
							document.getElementById("btcencryptedkey" + idPostFix).innerHTML = privateKey.slice(0, half) + '<br />' + privateKey.slice(half);
						}
						else {
							document.getElementById("btcprivwif" + idPostFix).innerHTML = privateKey;
						}

						// CODE to modify SVG DOM elements
						//var paperSvg = document.getElementById("papersvg" + idPostFix);
						//if (paperSvg) {
						//	svgDoc = paperSvg.contentDocument;
						//	if (svgDoc) {
						//		var bitcoinAddressElement = svgDoc.getElementById("bitcoinaddress");
						//		var privateKeyElement = svgDoc.getElementById("privatekey");
						//		if (bitcoinAddressElement && privateKeyElement) {
						//			bitcoinAddressElement.textContent = bitcoinAddress;
						//			privateKeyElement.textContent = privateKeyWif;
						//		}
						//	}
						//}
					},

					toggleArt: function (element) {
						ninja.wallets.paperwallet.resetLimits();
					},

					toggleEncrypt: function (element) {
						// enable/disable passphrase textbox
						document.getElementById("paperpassphrase").disabled = !element.checked;
						ninja.wallets.paperwallet.encrypt = element.checked;
						ninja.wallets.paperwallet.resetLimits();
					},

					resetLimits: function () {
						var hideArt = document.getElementById("paperart");
						var paperEncrypt = document.getElementById("paperencrypt");
						var limit;
						var limitperpage;

						document.getElementById("paperkeyarea").style.fontSize = "100%";
						if (!hideArt.checked) {
							limit = ninja.wallets.paperwallet.pageBreakAtArtisticDefault;
							limitperpage = ninja.wallets.paperwallet.pageBreakAtArtisticDefault;
						}
						else if (hideArt.checked && paperEncrypt.checked) {
							limit = ninja.wallets.paperwallet.pageBreakAtDefault;
							limitperpage = ninja.wallets.paperwallet.pageBreakAtDefault;
							// reduce font size
							document.getElementById("paperkeyarea").style.fontSize = "95%";
						}
						else if (hideArt.checked && !paperEncrypt.checked) {
							limit = ninja.wallets.paperwallet.pageBreakAtDefault;
							limitperpage = ninja.wallets.paperwallet.pageBreakAtDefault;
						}
						document.getElementById("paperlimitperpage").value = limitperpage;
						document.getElementById("paperlimit").value = limit;
					}
				};