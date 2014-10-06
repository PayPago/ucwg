ninja.translator = {
					currentCulture: "en",

					translate: function (culture) {
						var dict = ninja.translator.translations[culture];
						if (dict) {
							// set current culture
							ninja.translator.currentCulture = culture;
							// update menu UI
							for (var cult in ninja.translator.translations) {
								document.getElementById("culture" + cult).setAttribute("class", "");
							}
							document.getElementById("culture" + culture).setAttribute("class", "selected");
							// apply translations
							for (var id in dict) {
								if (document.getElementById(id) && document.getElementById(id).value) {
									document.getElementById(id).value = dict[id];
								}
								else if (document.getElementById(id)) {
									document.getElementById(id).innerHTML = dict[id];
								}
							}
						}
					},

					get: function (id) {
						var translation = ninja.translator.translations[ninja.translator.currentCulture][id];
						return translation;
					},

					translations: {
						"en": {
							// javascript alerts or messages
							"testneteditionactivated": "TESTNET EDITION ACTIVATED",
							"paperlabelbitcoinaddress": "###Coin Address:",
							"paperlabelprivatekey": "Private Key (Wallet Import Format):",
							"paperlabelencryptedkey": "Encrypted Private Key (Password required)",
							"bulkgeneratingaddresses": "Generating addresses... ",
							"brainalertpassphrasetooshort": "The passphrase you entered is too short.\n\n",
							"brainalertpassphrasewarning": "Warning: Choosing a strong passphrase is important to avoid brute force attempts to guess your passphrase and steal your ###Coins.",
							"brainalertpassphrasedoesnotmatch": "The passphrase does not match the confirm passphrase.",
							"detailalertnotvalidprivatekey": "The text you entered is not a valid Private Key",
							"detailconfirmsha256": "The text you entered is not a valid Private Key!\n\nWould you like to use the entered text as a passphrase and create a Private Key using a SHA256 hash of the passphrase?\n\nWarning: Choosing a strong passphrase is important to avoid brute force attempts to guess your passphrase and steal your ###Coins.",
							"bip38alertincorrectpassphrase": "Incorrect passphrase for this encrypted private key.",
							"bip38alertpassphraserequired": "Passphrase required for BIP38 key",
							"vanityinvalidinputcouldnotcombinekeys": "Invalid input. Could not combine keys.",
							"vanityalertinvalidinputpublickeysmatch": "Invalid input. The Public Key of both entries match. You must input two different keys.",
							"vanityalertinvalidinputcannotmultiple": "Invalid input. Cannot multiply two public keys. Select 'Add' to add two public keys to get a ###Coin address.",
							"vanityprivatekeyonlyavailable": "Only available when combining two private keys",
							"vanityalertinvalidinputprivatekeysmatch": "Invalid input. The Private Key of both entries match. You must input two different keys."
						},

						"es": {
							// javascript alerts or messages
							"testneteditionactivated": "Testnet se activa",
							"paperlabelbitcoinaddress": "DirecciÃ³n ###Coin:",
							"paperlabelprivatekey": "Clave privada (formato para importar):",
							"paperlabelencryptedkey": "Clave privada cifrada (contraseÃ±a necesaria)",
							"bulkgeneratingaddresses": "GeneraciÃ³n de direcciones... ",
							"brainalertpassphrasetooshort": "La contraseÃ±a introducida es demasiado corta.\n\n",
							"brainalertpassphrasewarning": "Aviso: Es importante escoger una contraseÃ±a fuerte para evitar ataques de fuerza bruta a fin de adivinarla y robar tus ###Coins.",
							"brainalertpassphrasedoesnotmatch": "Las contraseÃ±as no coinciden.",
							"detailalertnotvalidprivatekey": "El texto que has introducido no es una clave privada vÃ¡lida",
							"detailconfirmsha256": "El texto que has introducido no es una clave privada vÃ¡lida\n\nÂ¿Quieres usar ese texto como si fuera una contraseÃ±a y generar una clave privada usando un hash SHA256 de tal contraseÃ±a?\n\nAviso: Es importante escoger una contraseÃ±a fuerte para evitar ataques de fuerza bruta a fin de adivinarla y robar tus ###Coins.",
							"bip38alertincorrectpassphrase": "Incorrect passphrase for this encrypted private key.", //TODO: please translate
							"bip38alertpassphraserequired": "Passphrase required for BIP38 key", //TODO: please translate
							"vanityinvalidinputcouldnotcombinekeys": "Entrada no vÃ¡lida. No se puede combinar llaves.",
							"vanityalertinvalidinputpublickeysmatch": "Entrada no vÃ¡lida. La clave pÃºblica de ambos coincidan entradas. Debe introducir dos claves diferentes.",
							"vanityalertinvalidinputcannotmultiple": "Entrada no vÃ¡lida. No se puede multiplicar dos claves pÃºblicas. Seleccione 'AÃ±adir' para agregar dos claves pÃºblicas para obtener una direcciÃ³n ###Coin.",
							"vanityprivatekeyonlyavailable": "SÃ³lo estÃ¡ disponible cuando se combinan dos claves privadas",
							"vanityalertinvalidinputprivatekeysmatch": "Entrada no vÃ¡lida. La clave privada de ambos coincidan entradas. Debe introducir dos claves diferentes.",

							// header and menu html
							"tagline": "Generador de carteras ###Coin de cÃ³digo abierto en lado de cliente con Javascript",
							"generatelabelbitcoinaddress": "Generando direcciÃ³n ###Coin...",
							"generatelabelmovemouse": "Mueve un poco el ratÃ³n para crear entropÃ­a...",
							"singlewallet": "Una sola cartera",
							"paperwallet": "Cartera en papel",
							"bulkwallet": "Direcciones en masa",
							"brainwallet": "Cartera mental",
							"vanitywallet": "Cartera personalizada",
							"detailwallet": "Detalles de la cartera",

							// footer html
							"footerlabeldonations": "Donaciones:",
							"footerlabeltranslatedby": "TraducciÃ³n: <b>12345</b>Vypv2QSmuRXcciT5oEB27mPbWGeva",
							"footerlabelpgp": "PGP",
							"footerlabelversion": "HistÃ³rico de versiones",
							"footerlabelgithub": "Repositorio GitHub",
							"footerlabelcopyright1": "Copyright bitaddress.org.",
							"footerlabelcopyright2": "Copyright del cÃ³digo JavaScript: en el fuente.",
							"footerlabelnowarranty": "Sin garantÃ­a.",

							// single wallet html
							"newaddress": "Generar direcciÃ³n",
							"singleprint": "Imprimir",
							"singlelabelbitcoinaddress": "DirecciÃ³n ###Coin",
							"singlelabelprivatekey": "Clave privada (formato para importar):",
							"singletip1": "<b>A ###Coin wallet</b> is as simple as a single pairing of a ###Coin address with it's corresponding ###Coin private key. Such a wallet has been generated for you in your web browser and is displayed above.", //TODO: please translate
							"singletip2": "<b>To safeguard this wallet</b> you must print or otherwise record the ###Coin address and private key. It is important to make a backup copy of the private key and store it in a safe location. This site does not have knowledge of your private key. If you are familiar with PGP you can download this all-in-one HTML page and check that you have an authentic version from the author of this site by matching the SHA1 hash of this HTML with the SHA1 hash available in the signed version history document linked on the footer of this site. If you leave/refresh the site or press the Generate New Address button then a new private key will be generated and the previously displayed private key will not be retrievable.	Your ###Coin private key should be kept a secret. Whomever you share the private key with has access to spend all the ###Coins associated with that address. If you print your wallet then store it in a zip lock bag to keep it safe from water. Treat a paper wallet like cash.", //TODO: please translate
							"singletip3": "<b>Add funds</b> to this wallet by instructing others to send ###Coins to your ###Coin address.", //TODO: please translate
							"singletip4": "<b>Check your balance</b> by going to blockchain.info or blockexplorer.com and entering your ###Coin address.", //TODO: please translate
							"singletip5": "<b>Spend your ###Coins</b> by going to blockchain.info or mtgox.com and sweep the full balance of your private key into your account at their website. You can also spend your funds by downloading one of the popular ###Coin p2p clients and importing your private key to the p2p client wallet. Keep in mind when you import your single key to a ###Coin p2p client and spend funds your key will be bundled with other private keys in the p2p client wallet. When you perform a transaction your change will be sent to another ###Coin address within the p2p client wallet. You must then backup the p2p client wallet and keep it safe as your remaining ###Coins will be stored there. Satoshi advised that one should never delete a wallet.", //TODO: please translate

							// paper wallet html
							"paperlabelhideart": "Ocultar diseÃ±o",
							"paperlabeladdressesperpage": "Direcciones por pÃ¡gina:",
							"paperlabeladdressestogenerate": "Direcciones en total:",
							"papergenerate": "Generar",
							"paperprint": "Imprimir",
							"paperlabelBIPpassphrase": "Passphrase:", //TODO: please translate
							"paperlabelencrypt": "BIP38 Encrypt?", //TODO: please translate

							// bulk wallet html
							"bulklabelstartindex": "Empezar en:",
							"bulklabelrowstogenerate": "Filas a generar:",
							"bulklabelcompressed": "Compressed addresses?", //TODO: please translate
							"bulkgenerate": "Generar",
							"bulkprint": "Imprimir",
							"bulklabelcsv": "Valores separados por coma:",
							"bulklabelformat": "Ãndice,DirecciÃ³n,Clave privada (formato para importar)",
							"bulklabelq1": "Â¿Por quÃ© debo usar \"Direcciones en masa\" para aceptar ###Coins en mi web?",
							"bulka1": "La forma tradicional de aceptar ###Coins en tu web requiere tener instalado el cliente oficial de ###Coin (\"###Coind\"). Sin embargo muchos servicios de hosting no permiten instalar dicho cliente. AdemÃ¡s, ejecutar el cliente en tu servidor supone que las claves privadas estÃ¡n tambiÃ©n en el servidor y podrÃ­an ser comprometidas en caso de intrusiÃ³n. Al usar este mecanismo, puedes subir al servidor sÃ³lo las direcciÃ³n de ###Coin y no las claves privadas. De esta forma no te tienes que preocupar de que alguien robe la cartera si se cuelan en el servidor.",
							"bulklabelq2": "Â¿CÃ³mo uso \"Direcciones en masa\" para aceptar ###Coins en mi web?",
							"bulklabela2li1": "Usa el tab \"Direcciones en masa\" para generar por anticipado muchas direcciones (mÃ¡s de 10000). Copia y pega la lista de valores separados por comas (CSV) a un archivo de texto seguro (cifrado) en tu ordenador. Guarda una copia de seguridad en algÃºn lugar seguro.",
							"bulklabela2li2": "Importa las direcciones en la base de datos de tu servidor. No subas la cartera ni las claves pÃºblicas, o de lo contrario te lo pueden robar. Sube sÃ³lo las direcciones, ya que es lo que se va a mostrar a los clientes.",
							"bulklabela2li3": "Ofrece una alternativa en el carro de la compra de tu web para que los clientes paguen con ###Coin. Cuando el cliente elija pagar con ###Coin, les muestras una de las direcciones de la base de datos como su \"direcciÃ³n de pago\" y guardas esto junto con el pedido.",
							"bulklabela2li4": "Ahora te hace falta recibir una notificaciÃ³n del pago. Busca en google \"notificaciÃ³n de pagos ###Coin\" (o \"###Coin payment notification\" en inglÃ©s) y suscrÃ­bete a alguno de los servicios que aparezcan. Hay varios de ellos, que te pueden notificar vÃ­a Web services, API, SMS, email, etc. Una vez te llegue la notificaciÃ³n, lo cual puede ser automatizado, entonces ya puedes procesar el pedido. Para comprobar a mano si has recibido un pago, puedes usar Block Explorer: reemplaza DIRECCION a continuaciÃ³n por la direcciÃ³n que estÃ©s comprobando. La transacciÃ³n puede tardar entre 10 minutos y una hora en ser confirmada. <br />http://www.blockexplorer.com/address/DIRECCION<br /><br />Puedes ver las transacciones sin confirmar en: http://blockchain.info/ <br />Las transacciones sin confirmar suelen aparecer ahÃ­ en unos 30 segundos.",
							"bulklabela2li5": "Las ###Coins que recibas se almacenarÃ¡n de forma segura en la cadena de bloques. Usa la cartera original que generaste en el paso 1 para usarlas.",

							// brain wallet html
							"brainlabelenterpassphrase": "ContraseÃ±a:",
							"brainlabelshow": "Mostrar",
							"brainprint": "Imprimir",
							"brainlabelconfirm": "Confirmar contraseÃ±a:",
							"brainview": "Ver",
							"brainalgorithm": "Algoritmo: SHA256(contraseÃ±a)",
							"brainlabelbitcoinaddress": "DirecciÃ³n ###Coin:",
							"brainlabelprivatekey": "Clave privada (formato para importar):",

							// vanity wallet html
							"vanitylabelstep1": "Paso 1 - Genera tu par de claves",
							"vanitynewkeypair": "Generar",
							"vanitylabelstep1publickey": "Clave pÃºblica:",
							"vanitylabelstep1pubnotes": "Copia y pega la lÃ­nea de arriba en el campo \"Your-Part-Public-Key\" de la web de Vanity Pool.",
							"vanitylabelstep1privatekey": "Clave privada:",
							"vanitylabelstep1privnotes": "Copia y pega la clave pÃºblica de arriba en un archivo de texto. Es mejor que lo almacenes en un volumen cifrado. Lo necesitarÃ¡s para recuperar la clave privada una vez Vanity Pool haya encontrado tu prefijo.",
							"vanitylabelstep2calculateyourvanitywallet": "Paso 2 - Calcula tu cartera personalizada",
							"vanitylabelenteryourpart": "Introduce la clave privada generada en el paso 1, y que has guardado:",
							"vanitylabelenteryourpoolpart": "Introduce la clave privada obtenida de la Vanity Pool:",
							"vanitylabelnote1": "[NOTA: esta casilla de entrada puede aceptar una clave pÃºblica o clave privada]",
							"vanitylabelnote2": "[NOTA: esta casilla de entrada puede aceptar una clave pÃºblica o clave privada]",
							"vanitylabelradioadd": "AÃ±adir",
							"vanitylabelradiomultiply": "Multiplicar",
							"vanitycalc": "Calcular cartera personalizada",
							"vanitylabelbitcoinaddress": "DirecciÃ³n ###Coin personalizada:",
							"vanitylabelnotesbitcoinaddress": "Esta es tu nueva direcciÃ³n, que deberÃ­a tener el prefijo deseado.",
							"vanitylabelpublickeyhex": "Clave pÃºblica personalizada (HEX):",
							"vanitylabelnotespublickeyhex": "Lo anterior es la clave pÃºblica en formato hexadecimal.",
							"vanitylabelprivatekey": "Clave privada personalizada (formato para importar):",
							"vanitylabelnotesprivatekey": "Esto es la clave privada para introducir en tu cartera.",

							// detail wallet html
							"detaillabelenterprivatekey": "Introduce la clave privada (en cualquier formato)",
							"detailview": "Ver detalles",
							"detailprint": "Imprimir",
							"detaillabelnote1": "Tu clave privada es un nÃºmero secreto, Ãºnico, que sÃ³lo tÃº conoces. Se puede expresar en varios formatos. AquÃ­ abajo mostramos la direcciÃ³n y la clave pÃºblica que se corresponden con tu clave privada, asÃ­ como la clave privada en los formatos mÃ¡s conocidos (para importar, hex, base64 y mini).",
							"detaillabelnote2": "###Coin v0.6+ almacena las claves pÃºblicas comprimidas. El cliente tambiÃ©n soporta importar/exportar claves privadas usando importprivkey/dumpprivkey. El formato de las claves privadas exportadas depende de si la direcciÃ³n se generÃ³ en una cartera antigua o nueva.",
							"detaillabelbitcoinaddress": "DirecciÃ³n ###Coin:",
							"detaillabelbitcoinaddresscomp": "DirecciÃ³n ###Coin (comprimida):",
							"detaillabelpublickey": "Clave pÃºblica (130 caracteres [0-9A-F]):",
							"detaillabelpublickeycomp": "Clave pÃºblica (comprimida, 66 caracteres [0-9A-F]):",
							"detaillabelprivwif": "Clave privada para importar<br />51 caracteres en base58, empieza con un",
							"detaillabelprivwifcomp": "Clave privada para importar<br />comprimida, 52 caracteres en base58, empieza con",
							"detaillabelprivhex": "Clave privada en formato hexadecimal (64 caracteres [0-9A-F]):",
							"detaillabelprivb64": "Clave privada en base64 (44 caracteres):",
							"detaillabelprivmini": "Clave privada en formato mini (22, 26 o 30 caracteres, empieza por 'S'):",
							"detaillabelpassphrase": "BIP38 Passphrase", //TODO: please translate
							"detaildecrypt": "Decrypt BIP38" //TODO: please translate
						},

						"fr": {
							// javascript alerts or messages
							"testneteditionactivated": "Ã‰DITION TESTNET ACTIVÃ‰E",
							"paperlabelbitcoinaddress": "Adresse ###Coin:",
							"paperlabelprivatekey": "ClÃ© PrivÃ©e (Format d'importation de porte-monnaie):",
							"paperlabelencryptedkey": "Encrypted Private Key (Password required)", //TODO: please translate
							"bulkgeneratingaddresses": "CrÃ©ation de l'adresse... ",
							"brainalertpassphrasetooshort": "Le mot de passe que vous avez entrÃ© est trop court.\n\n",
							"brainalertpassphrasewarning": "Attention: Choisir un mot de passe solide est important pour vous protÃ©ger des attaques bruteforce visant Ã  trouver votre mot de passe et voler vos ###Coins.",
							"brainalertpassphrasedoesnotmatch": "Le mot de passe ne correspond pas au mot de passe de vÃ©rification.",
							"detailalertnotvalidprivatekey": "Le texte que vous avez entrÃ© n'est pas une ClÃ© PrivÃ©e valide",
							"detailconfirmsha256": "Le texte que vous avez entrÃ© n'est pas une ClÃ© PrivÃ©e valide!\n\nVoulez-vous utiliser le texte comme un mot de passe et crÃ©er une ClÃ© PrivÃ©e Ã  partir d'un hash SHA256 de ce mot de passe?\n\nAttention: Choisir un mot de passe solide est important pour vous protÃ©ger des attaques bruteforce visant Ã  trouver votre mot de passe et voler vos ###Coins.",
							"bip38alertincorrectpassphrase": "Incorrect passphrase for this encrypted private key.", //TODO: please translate
							"bip38alertpassphraserequired": "Passphrase required for BIP38 key", //TODO: please translate
							"vanityinvalidinputcouldnotcombinekeys": "EntrÃ©e non valide. Impossible de combiner les clÃ©s.",
							"vanityalertinvalidinputpublickeysmatch": "EntrÃ©e non valide. La clÃ© publique des deux entrÃ©es est identique. Vous devez entrer deux clÃ©s diffÃ©rentes.",
							"vanityalertinvalidinputcannotmultiple": "EntrÃ©e non valide. Il n'est pas possible de multiplier deux clÃ©s publiques. SÃ©lectionner 'Ajouter' pour ajouter deux clÃ©s publiques pour obtenir une adresse ###Coin.",
							"vanityprivatekeyonlyavailable": "Seulement disponible si vos combinez deux clÃ©s privÃ©es",
							"vanityalertinvalidinputprivatekeysmatch": "EntrÃ©e non valide. La clÃ© PrivÃ©e des deux entrÃ©es est identique. Vous devez entrer deux clÃ©s diffÃ©rentes.",
							
							// header and menu html
							"tagline": "GÃ©nÃ©rateur De Porte-Monnaie ###Coin Javascript Hors-Ligne",
							"generatelabelbitcoinaddress": "CrÃ©ation de l'adresse ###Coin...",
							"generatelabelmovemouse": "BOUGEZ votre souris pour ajouter de l'entropie...",
							"singlewallet": "Porte-Monnaie Simple",
							"paperwallet": "Porte-Monnaie Papier",
							"bulkwallet": "Porte-Monnaie En Vrac",
							"brainwallet": "Porte-Monnaie Cerveau",
							"vanitywallet": "Porte-Monnaie VanitÃ©",
							"detailwallet": "DÃ©tails du Porte-Monnaie",
							
							// footer html
							"footerlabeldonations": "Dons:",
							"footerlabeltranslatedby": "Traduction: 1Gy7NYSJNUYqUdXTBow5d7bCUEJkUFDFSq",
							"footerlabelpgp": "PGP",
							"footerlabelversion": "Historique De Version",
							"footerlabelgithub": "DÃ©pÃ´t GitHub",
							"footerlabelcopyright1": "Copyright bitaddress.org.",
							"footerlabelcopyright2": "Les droits d'auteurs JavaScript sont inclus dans le code source.",
							"footerlabelnowarranty": "Aucune garantie.",
							
							// single wallet html
							"newaddress": "GÃ©nÃ©rer Une Nouvelle Adresse",
							"singleprint": "Imprimer",
							"singlelabelbitcoinaddress": "Adresse ###Coin:",
							"singlelabelprivatekey": "ClÃ© PrivÃ©e (Format d'importation de porte-monnaie):",
							"singletip1": "<b>A ###Coin wallet</b> is as simple as a single pairing of a ###Coin address with it's corresponding ###Coin private key. Such a wallet has been generated for you in your web browser and is displayed above.", //TODO: please translate
							"singletip2": "<b>To safeguard this wallet</b> you must print or otherwise record the ###Coin address and private key. It is important to make a backup copy of the private key and store it in a safe location. This site does not have knowledge of your private key. If you are familiar with PGP you can download this all-in-one HTML page and check that you have an authentic version from the author of this site by matching the SHA1 hash of this HTML with the SHA1 hash available in the signed version history document linked on the footer of this site. If you leave/refresh the site or press the Generate New Address button then a new private key will be generated and the previously displayed private key will not be retrievable.	Your ###Coin private key should be kept a secret. Whomever you share the private key with has access to spend all the ###Coins associated with that address. If you print your wallet then store it in a zip lock bag to keep it safe from water. Treat a paper wallet like cash.", //TODO: please translate
							"singletip3": "<b>Add funds</b> to this wallet by instructing others to send ###Coins to your ###Coin address.", //TODO: please translate
							"singletip4": "<b>Check your balance</b> by going to blockchain.info or blockexplorer.com and entering your ###Coin address.", //TODO: please translate
							"singletip5": "<b>Spend your ###Coins</b> by going to blockchain.info or mtgox.com and sweep the full balance of your private key into your account at their website. You can also spend your funds by downloading one of the popular ###Coin p2p clients and importing your private key to the p2p client wallet. Keep in mind when you import your single key to a ###Coin p2p client and spend funds your key will be bundled with other private keys in the p2p client wallet. When you perform a transaction your change will be sent to another ###Coin address within the p2p client wallet. You must then backup the p2p client wallet and keep it safe as your remaining ###Coins will be stored there. Satoshi advised that one should never delete a wallet.", //TODO: please translate

							// paper wallet html
							"paperlabelhideart": "Retirer Le Style?",
							"paperlabeladdressesperpage": "Adresses par page:",
							"paperlabeladdressestogenerate": "Nombre d'adresses Ã  crÃ©er:",
							"papergenerate": "GÃ©nÃ©rer",
							"paperprint": "Imprimer",
							"paperlabelBIPpassphrase": "Passphrase:", //TODO: please translate
							"paperlabelencrypt": "BIP38 Encrypt?", //TODO: please translate

							// bulk wallet html
							"bulklabelstartindex": "Commencer Ã  l'index:",
							"bulklabelrowstogenerate": "Colonnes Ã  gÃ©nÃ©rer:",
							"bulklabelcompressed": "Compressed addresses?", //TODO: please translate
							"bulkgenerate": "GÃ©nÃ©rer",
							"bulkprint": "Imprimer",
							"bulklabelcsv": "Valeurs SÃ©parÃ©es Par Des Virgules (CSV):",
							"bulklabelformat": "Index,Adresse,ClÃ© PrivÃ©e (WIF)",
							"bulklabelq1": "Pourquoi utiliserais-je un Porte-monnaie en vrac pour accepter les ###Coins sur mon site web?",
							"bulka1": "L'approche traditionnelle pour accepter des ###Coins sur votre site web requiÃ¨re l'installation du logiciel ###Coin officiel (\"###Coind\"). Plusieurs hÃ©bergeurs ne supportent pas l'installation du logiciel ###Coin. De plus, faire fonctionner le logiciel ###Coin sur votre serveur web signifie que vos clÃ©s privÃ©es sont hÃ©bergÃ©es sur le serveur et pourraient donc Ãªtre volÃ©es si votre serveur web Ã©tait compromis. En utilisant un Porte-monnaie en vrac, vous pouvez publiquer seulement les adresses ###Coin sur votre serveur et non les clÃ©s privÃ©es. Vous n'avez alors pas Ã  vous inquiÃ©ter du risque de vous faire voler votre porte-monnaie si votre serveur Ã©tait compromis.",
							"bulklabelq2": "Comment utiliser le Porte-monnaie en vrac pour utiliser le ###Coin sur mon site web?",
							"bulklabela2li1": "Utilisez le Porte-monnaie en vrac pour prÃ©-gÃ©nÃ©rer une large quantitÃ© d'adresses ###Coin (10,000+). Copiez collez les donnÃ©es sÃ©parÃ©es par des virgules (CSV) dans un fichier texte sÃ©curisÃ© dans votre ordinateur. Sauvegardez ce fichier dans un endroit sÃ©curisÃ©.",
							"bulklabela2li2": "Importez les adresses ###Coin dans une base de donnÃ©e sur votre serveur web. (N'ajoutez pas le porte-monnaie ou les clÃ©s privÃ©es sur votre serveur web, sinon vous courrez le risque de vous faire voler si votre serveur est compromis. Ajoutez seulement les adresses ###Coin qui seront visibles Ã  vos visiteurs.)",
							"bulklabela2li3": "Ajoutez une option dans votre panier en ligne pour que vos clients puissent vous payer en ###Coin. Quand un client choisi de vous payer en ###Coin, vous pouvez afficher une des adresses de votre base de donnÃ©e comme \"adresse de paiment\" pour votre client et sauvegarder cette adresse avec sa commande.",
							"bulklabela2li4": "Vous avez maintenant besoin d'Ãªtre avisÃ© quand le paiement est reÃ§u. Cherchez \"###Coin payment notification\" sur Google et inscrivez-vous Ã  un service de notification de paiement ###Coin. Il y a plusieurs services qui vous avertiront via des services Web, API, SMS, Email, etc. Une fois que vous avez reÃ§u la notification, qui devrait Ãªtre programmÃ©e automatiquement, vous pouvez traiter la commande de votre client. Pour vÃ©rifier manuellement si un paiement est arrivÃ©, vous pouvez utiliser Block Explorer. Remplacez ADRESSE par l'adresse ###Coin que vous souhaitez vÃ©rifier. La confirmation de la transaction pourrait prendre de 10 Ã  60 minutes pour Ãªtre confirmÃ©e.<br />http://www.blockexplorer.com/address/ADRESSE<br /><br />Les transactions non confirmÃ©es peuvent Ãªtre visualisÃ©es ici: http://blockchain.info/ <br />Vous devriez voir la transaction Ã  l'intÃ©rieur de 30 secondes.",
							"bulklabela2li5": "Les ###Coins vos s'accumuler de faÃ§on sÃ©curitaire dans la chaÃ®ne de blocs. Utilisez le porte-monnaie original que vous avez gÃ©nÃ©rÃ© Ã  l'Ã©tape 1 pour les dÃ©penser.",
							
							// brain wallet html
							"brainlabelenterpassphrase": "Entrez votre mot de passe: ",
							"brainlabelshow": "Afficher?",
							"brainprint": "Imprimer",
							"brainlabelconfirm": "Confirmer le mot de passe: ",
							"brainview": "Visualiser",
							"brainalgorithm": "Algorithme: SHA256(mot de passe)",
							"brainlabelbitcoinaddress": "Adresse ###Coin:",
							"brainlabelprivatekey": "ClÃ© PrivÃ©e (Format d'importation de porte-monnaie):",

							// vanity wallet html
							"vanitylabelstep1": "Ã‰tape 1 - GÃ©nÃ©rer votre \"Ã‰tape 1 Paire De ClÃ©s\"",
							"vanitynewkeypair": "GÃ©nÃ©rer",
							"vanitylabelstep1publickey": "Ã‰tape 1 ClÃ© Publique:",
							"vanitylabelstep1pubnotes": "Copiez celle-ci dans la case Votre-ClÃ©-Publique du site de Vanity Pool.",
							"vanitylabelstep1privatekey": "Step 1 ClÃ© PrivÃ©e:",
							"vanitylabelstep1privnotes": "Copiez la cette ClÃ© PrivÃ©e dans un fichier texte. IdÃ©alement, sauvegardez la dans un fichier encryptÃ©. Vous en aurez besoin pour rÃ©cupÃ©rer la ClÃ© PrivÃ©e lors que Vanity Pool aura trouvÃ© votre prÃ©fixe.",
							"vanitylabelstep2calculateyourvanitywallet": "Ã‰tape 2 - Calculer votre Porte-monnaie VanitÃ©",
							"vanitylabelenteryourpart": "Entrez votre ClÃ© PrivÃ©e (gÃ©nÃ©rÃ©e Ã  l'Ã©tape 1 plus haut et prÃ©cÃ©demment sauvegardÃ©e):",
							"vanitylabelenteryourpoolpart": "Entrez la ClÃ© PrivÃ©e (provenant de Vanity Pool):",
							"vanitylabelnote1": "[NOTE: cette case peut accepter une clÃ© publique ou un clÃ© privÃ©e]",
							"vanitylabelnote2": "[NOTE: cette case peut accepter une clÃ© publique ou un clÃ© privÃ©e]",
							"vanitylabelradioadd": "Ajouter",
							"vanitylabelradiomultiply": "Multiplier",
							"vanitycalc": "Calculer Le Porte-monnaie VanitÃ©",
							"vanitylabelbitcoinaddress": "Adresse ###Coin VanitÃ©:",
							"vanitylabelnotesbitcoinaddress": "Ci-haut est votre nouvelle adresse qui devrait inclure le prÃ©fix requis.",
							"vanitylabelpublickeyhex": "ClÃ© Public VanitÃ© (HEX):",
							"vanitylabelnotespublickeyhex": "Celle-ci est la ClÃ© Publique dans le format hexadÃ©cimal. ",
							"vanitylabelprivatekey": "ClÃ© PrivÃ©e VanitÃ© (WIF):",
							"vanitylabelnotesprivatekey": "Celle-ci est la ClÃ© PrivÃ©e pour accÃ©der Ã  votre porte-monnaie. ",
							
							// detail wallet html
							"detaillabelenterprivatekey": "Entrez la ClÃ© PrivÃ©e (quel que soit son format)",
							"detailview": "Voir les dÃ©tails",
							"detailprint": "Imprimer",
							"detaillabelnote1": "Votre ClÃ© PrivÃ©e ###Coin est un nombre secret que vous Ãªtes le seul Ã  connaÃ®tre. Il peut Ãªtre encodÃ© sous la forme d'un nombre sous diffÃ©rents formats. Ci-bas, nous affichons l'adresse ###Coin et la ClÃ© Publique qui corresponds Ã  la ClÃ© PrivÃ©e ainsi que la ClÃ© PrivÃ©e dans les formats d'encodage les plus populaires (WIF, HEX, B64, MINI).",
							"detaillabelnote2": "###Coin v0.6+ conserve les clÃ©s publiques dans un format compressÃ©. Le logiciel supporte maintenant aussi l'importation et l'exportation de clÃ©s privÃ©es avec importprivkey/dumpprivkey. Le format de la clÃ© privÃ©e exportÃ©e est dÃ©terminÃ© selon la version du porte-monnaie ###Coin.",
							"detaillabelbitcoinaddress": "Adresse ###Coin:",
							"detaillabelbitcoinaddresscomp": "Adresse ###Coin (compressÃ©e):",
							"detaillabelpublickey": "ClÃ© Publique (130 caractÃ¨res [0-9A-F]):",
							"detaillabelpublickeycomp": "ClÃ© Publique (compressÃ©e, 66 caractÃ¨res [0-9A-F]):",
							"detaillabelprivwif": "ClÃ© PrivÃ©e WIF<br />51 caractÃ¨res base58, dÃ©bute avec un a",
							"detaillabelprivwifcomp": "ClÃ© PrivÃ©e WIF<br />compressÃ©e, 52 caractÃ¨res base58, dÃ©bute avec un a",
							"detaillabelprivhex": "ClÃ© PrivÃ©e Format Hexadecimal (64 caractÃ¨res [0-9A-F]):",
							"detaillabelprivb64": "ClÃ© PrivÃ©e Base64 (44 caractÃ¨res):",
							"detaillabelprivmini": "ClÃ© PrivÃ©e Format Mini (22, 26 ou 30 caractÃ¨res, dÃ©bute avec un 'S'):",
							"detaillabelpassphrase": "BIP38 Passphrase", //TODO: please translate
							"detaildecrypt": "Decrypt BIP38" //TODO: please translate
						},

						"el": {
							// javascript alerts or messages
							"testneteditionactivated": "Î•ÎÎ•Î¡Î“Î— Î•ÎšÎ”ÎŸÎ£Î— TESTNET",
							"paperlabelbitcoinaddress": "Î”Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ· ###Coin:",
							"paperlabelprivatekey": "Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ (ÎœÎ¿ÏÏ†Î® ÎµÎ¹ÏƒÎ±Î³Ï‰Î³Î®Ï‚ ÏƒÎµ Ï€Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹):",
							"paperlabelencryptedkey": "Encrypted Private Key (Password required)", //TODO: please translate
							"bulkgeneratingaddresses": "Î”Î·Î¼Î¹Î¿Ï…ÏÎ³Î¯Î± Î´Î¹ÎµÏ…Î¸ÏÎ½ÏƒÎµÏ‰Î½... ",
							"brainalertpassphrasetooshort": "Î— Ï†ÏÎ¬ÏƒÎ· ÎºÏ‰Î´Î¹ÎºÏŒÏ‚ Ï€Î¿Ï… Î´ÏŽÏƒÎ±Ï„Îµ ÎµÎ¯Î½Î±Î¹ Ï€Î¿Î»Ï Î±Î´ÏÎ½Î±Î¼Î·.\n\n",
							"brainalertpassphrasewarning": "Î ÏÎ¿ÏƒÎ¿Ï‡Î®: Î•Î¯Î½Î±Î¹ ÏƒÎ·Î¼Î±Î½Ï„Î¹ÎºÏŒ Î½Î± ÎµÏ€Î¹Î»Î­Î¾ÎµÏ„Îµ Î¼Î¹Î± Î¹ÏƒÏ‡Ï…ÏÎ® Ï†ÏÎ¬ÏƒÎ· ÎºÏ‰Î´Î¹ÎºÏŒ Ï€Î¿Ï… Î¸Î± ÏƒÎ±Ï‚ Ï€ÏÎ¿Ï†Ï…Î»Î¬Î¾ÎµÎ¹ Î±Ï€ÏŒ Î±Ï€ÏŒÏ€ÎµÎ¹ÏÎµÏ‚ Ï€Î±ÏÎ±Î²Î¯Î±ÏƒÎ®Ï‚ Ï„Î·Ï‚ Ï„ÏÏ€Î¿Ï… brute force ÎºÎ±Î¹ ÎºÎ»Î¿Ï€Î® Ï„Ï‰Î½ ###Coins ÏƒÎ±Ï‚.",
							"brainalertpassphrasedoesnotmatch": "Î— Ï†ÏÎ¬ÏƒÎ· ÎºÏ‰Î´Î¹ÎºÏŒÏ‚ ÎºÎ±Î¹ Î· ÎµÏ€Î¹Î²ÎµÎ²Î±Î¯Ï‰ÏƒÎ· Ï„Î·Ï‚ Î´Îµ ÏƒÏ…Î¼Ï†Ï‰Î½Î¿ÏÎ½.",
							"detailalertnotvalidprivatekey": "Î¤Î¿ ÎºÎµÎ¯Î¼ÎµÎ½Î¿ Ï€Î¿Ï… ÎµÎ¹ÏƒÎ¬Î³Î±Ï„Îµ Î´ÎµÎ½ Î±Î½Ï„Î¹ÏƒÏ„Î¿Î¹Ï‡ÎµÎ¯ ÏƒÎµ Î­Î³ÎºÏ…ÏÎ¿ Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯",
							"detailconfirmsha256": "Î¤Î¿ ÎºÎµÎ¯Î¼ÎµÎ½Î¿ Ï€Î¿Ï… ÎµÎ¹ÏƒÎ¬Î³Î±Ï„Îµ Î´ÎµÎ½ Î±Î½Ï„Î¹ÏƒÏ„Î¿Î¹Ï‡ÎµÎ¯ ÏƒÎµ Î­Î³ÎºÏ…ÏÎ¿ Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯!\n\nÎ˜Î± Î¸Î­Î»Î±Ï„Îµ Î½Î± Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î·Î¸ÎµÎ¯ Ï„Î¿ ÎºÎµÎ¯Î¼ÎµÎ½Î¿ Ï‰Ï‚ ÎºÏ‰Î´Î¹ÎºÏŒÏ‚ Î³Î¹Î± Ï„Î· Î´Î·Î¼Î¹Î¿Ï…ÏÎ³Î¯Î± ÎµÎ½ÏŒÏ‚ Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÎ¿Ï ÎšÎ»ÎµÎ¹Î´Î¹Î¿Ï Ï€Î¿Ï… Î¸Î± Î´Î·Î¼Î¹Î¿Ï…ÏÎ³Î·Î¸ÎµÎ¯ Î±Ï€ÏŒ Ï„Î¿ SHA265 hash Ï„Î·Ï‚ Ï†ÏÎ¬ÏƒÎ·Ï‚ ÎºÏ‰Î´Î¹ÎºÎ¿Ï;\n\nÎ ÏÎ¿ÏƒÎ¿Ï‡Î®: Î•Î¯Î½Î±Î¹ ÏƒÎ·Î¼Î±Î½Ï„Î¹ÎºÏŒ Î½Î± ÎµÏ€Î¹Î»Î­Î¾ÎµÏ„Îµ Î­Î½Î±Î½ Î¹ÏƒÏ‡Ï…ÏÏŒ ÎºÏ‰Î´Î¹ÎºÏŒ ÏŽÏƒÏ„Îµ Î½Î± ÎµÎ¯Î½Î±Î¹ Î´ÏÏƒÎºÎ¿Î»Î¿ Î½Î± Ï„Î¿Î½ Î¼Î±Î½Ï„Î­ÏˆÎµÎ¹ ÎºÎ¬Ï€Î¿Î¹Î¿Ï‚ ÎºÎ±Î¹ Î½Î± ÎºÎ»Î­ÏˆÎµÎ¹ Ï„Î± ###Coins ÏƒÎ±Ï‚.",
							"bip38alertincorrectpassphrase": "Î›Î¬Î¸Î¿Ï‚ Ï†ÏÎ¬ÏƒÎ· ÎºÏ‰Î´Î¹ÎºÏŒÏ‚ Î±Ï€Î¿ÎºÏÏ…Ï€Ï„Î¿Î³ÏÎ¬Ï†Î·ÏƒÎ·Ï‚ Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÎ¿Ï ÎšÎ»ÎµÎ¹Î´Î¹Î¿Ï.",
							"bip38alertpassphraserequired": "Î‘Ï€Î±Î¹Ï„ÎµÎ¯Ï„Î±Î¹ Î· Ï†ÏÎ¬ÏƒÎ· ÎºÏ‰Î´Î¹ÎºÏŒÏ‚ Î³Î¹Î± Ï„Î¿ ÎšÎ»ÎµÎ¹Î´Î¯ BIP38",
							"vanityinvalidinputcouldnotcombinekeys": "ÎœÎ· Î­Î³ÎºÏ…ÏÎ· ÎµÎ¹ÏƒÎ±Î³Ï‰Î³Î®. ÎŸ ÏƒÏ…Î½Î´Ï…Î±ÏƒÎ¼ÏŒÏ‚ Ï„Ï‰Î½ ÎºÎ»ÎµÎ¹Î´Î¹ÏŽÎ½ ÎµÎ¯Î½Î±Î¹ Î±Î´ÏÎ½Î±Ï„Î¿Ï‚.",
							"vanityalertinvalidinputpublickeysmatch": "ÎœÎ· Î­Î³ÎºÏ…ÏÎ· ÎµÎ¹ÏƒÎ±Î³Ï‰Î³Î®. Î¤Î± Î”Î·Î¼ÏŒÏƒÎ¹Î± ÎšÎ»ÎµÎ¹Î´Î¹Î¬ Ï„Ï‰Î½ Î´ÏÎ¿ ÎµÎ³Î³ÏÎ±Ï†ÏŽÎ½ ÎµÎ¯Î½Î±Î¹ ÏŒÎ¼Î¿Î¹Î±. Î ÏÎ­Ï€ÎµÎ¹ Î½Î± ÎµÎ¹ÏƒÎ¬Î³ÎµÏ„Îµ Î´ÏÎ¿ Î´Î¹Î±Ï†Î¿ÏÎµÏ„Î¹ÎºÎ¬ ÎšÎ»ÎµÎ¹Î´Î¹Î¬.",
							"vanityalertinvalidinputcannotmultiple": "ÎœÎ· Î­Î³ÎºÏ…ÏÎ· ÎµÎ¹ÏƒÎ±Î³Ï‰Î³Î®. Î”ÎµÎ½ ÎµÎ¯Î½Î±Î¹ Î´Ï…Î½Î±Ï„ÏŒÏ‚ Î¿ Ï€Î¿Î»Î»Î±Ï€Î»Î±ÏƒÎ¹Î±ÏƒÎ¼ÏŒÏ‚ Î´ÏÎ¿ Î”Î·Î¼ÏŒÏƒÎ¹Ï‰Î½ ÎšÎ»ÎµÎ¹Î´Î¹ÏŽÎ½. Î•Ï€Î¹Î»Î­Î¾Ï„Îµ 'Î ÏÏŒÏƒÎ¸ÎµÏƒÎ·' Î³Î¹Î± Î½Î± Ï€ÏÎ¿ÏƒÎ¸Î­ÏƒÎµÏ„Îµ Î´ÏÎ¿ Î”Î·Î¼ÏŒÏƒÎ¹Î± ÎšÎ»ÎµÎ¹Î´Î¹Î¬ Î³Î¹Î± Î´Î·Î¼Î¹Î¿Ï…ÏÎ³Î¯Î± Î¼Î¯Î±Ï‚ Î”Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ·Ï‚ ###Coin.",
							"vanityprivatekeyonlyavailable": "Î”Î¹Î±Î¸Î­ÏƒÎ¹Î¼Î¿ Î¼ÏŒÎ½Î¿ ÎºÎ±Ï„Î¬ Ï„Î¿ ÏƒÏ…Î½Î´Ï…Î±ÏƒÎ¼ÏŒ Î´ÏÎ¿ Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŽÎ½ ÎšÎ»ÎµÎ¹Î´Î¹ÏŽÎ½",
							"vanityalertinvalidinputprivatekeysmatch": "ÎœÎ· Î­Î³ÎºÏ…ÏÎ· ÎµÎ¹ÏƒÎ±Î³Ï‰Î³Î®. Î¤Î± Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÎ¬ ÎšÎ»ÎµÎ¹Î´Î¹Î¬ Ï„Ï‰Î½ Î´ÏÎ¿ ÎµÎ³Î³ÏÎ±Ï†ÏŽÎ½ ÎµÎ¯Î½Î±Î¹ ÏŒÎ¼Î¿Î¹Î±. Î ÏÎ­Ï€ÎµÎ¹ Î½Î± ÎµÎ¹ÏƒÎ¬Î³ÎµÏ„Îµ Î´ÏÎ¿ Î´Î¹Î±Ï†Î¿ÏÎµÏ„Î¹ÎºÎ¬ ÎšÎ»ÎµÎ¹Î´Î¹Î¬.",

							// header and menu html
							"tagline": "Î”Î·Î¼Î¹Î¿Ï…ÏÎ³ÏŒÏ‚ Î”Î¹ÎµÏ…Î¸ÏÎ½ÏƒÎµÏ‰Î½ ###Coin, Î±Î½Î¿Î¹ÎºÏ„Î¿Ï ÎºÏŽÎ´Î¹ÎºÎ± Javascript",
							"generatelabelbitcoinaddress": "Î”Î·Î¼Î¹Î¿Ï…ÏÎ³Î¯Î± Î”Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ·Ï‚ ###Coin...",
							"generatelabelmovemouse": "ÎšÎŸÎ¥ÎÎ—Î£Î¤Î• Ï„Î¿ Ï€Î¿Î½Ï„Î¯ÎºÎ¹ Ï„ÏÎ¹Î³ÏÏÏ‰ Î³Î¹Î± Î½Î± Ï€ÏÎ¿ÏƒÎ¸Î­ÏƒÎµÏ„Îµ ÎµÏ€Î¹Ï€Î»Î­Î¿Î½ Ï„Ï…Ï‡Î±Î¹ÏŒÏ„Î·Ï„Î±...",
							"singlewallet": "Î‘Ï€Î»ÏŒ Î Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹",
							"paperwallet": "Î§Î¬ÏÏ„Î¹Î½Î¿ Î Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹",
							"bulkwallet": "Î Î¿Î»Î»Î±Ï€Î»Î¬ Î Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹Î±",
							"brainwallet": "ÎœÎ½Î·Î¼Î¿Î½Î¹ÎºÏŒ Î Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹",
							"vanitywallet": "Î Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹ Vanity",
							"detailwallet": "Î›ÎµÏ€Ï„Î¿Î¼Î­ÏÎµÎ¹ÎµÏ‚ Î Î¿ÏÏ„Î¿Ï†Î¿Î»Î¹Î¿Ï",

							// footer html
							"footerlabeldonations": "Î”Ï‰ÏÎµÎ­Ï‚:",
							"footerlabeltranslatedby": "ÎœÎµÏ„Î¬Ï†ÏÎ±ÏƒÎ·: <a href='http://###CoinX.gr/'><b>###CoinX.gr</b></a> 1BitcoiNxkUPcTFxwMqxhRiPEiQRzYskf6",
							"footerlabelpgp": "PGP",
							"footerlabelversion": "Î¹ÏƒÏ„Î¿ÏÎ¹ÎºÏŒ ÎµÎºÎ´ÏŒÏƒÎµÏ‰Î½",
							"footerlabelgithub": "Î‘Ï€Î¿Î¸ÎµÏ„Î®ÏÎ¹Î¿ GitHub",
							"footerlabelcopyright1": "Copyright bitaddress.org.",
							"footerlabelcopyright2": "Î¤Î± Ï€Î½ÎµÏ…Î¼Î±Ï„Î¹ÎºÎ¬ Î´Î¹ÎºÎ±Î¹ÏŽÎ¼Î±Ï„Î± Ï„Î·Ï‚ JavaScript Ï€ÎµÏÎ¹Î»Î±Î¼Î²Î¬Î½Î¿Î½Ï„Î±Î¹ ÏƒÏ„Î¿Î½ ÎºÏŽÎ´Î¹ÎºÎ±.",
							"footerlabelnowarranty": "ÎšÎ±Î¼Î¯Î± ÎµÎ³Î³ÏÎ·ÏƒÎ·.",

							// single wallet html
							"newaddress": "Î”Î·Î¼Î¹Î¿Ï…ÏÎ³Î¯Î± Î¼Î¹Î±Ï‚ Î½Î­Î±Ï‚ Î”Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ·Ï‚",
							"singleprint": "Î•ÎºÏ„ÏÏ€Ï‰ÏƒÎ·",
							"singlelabelbitcoinaddress": "Î”Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ· ###Coin:",
							"singlelabelprivatekey": "Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ (ÎœÎ¿ÏÏ†Î® ÎµÎ¹ÏƒÎ±Î³Ï‰Î³Î®Ï‚ ÏƒÎµ Ï€Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹):",
							"singletip1": "<b>A ###Coin wallet</b> is as simple as a single pairing of a ###Coin address with it's corresponding ###Coin private key. Such a wallet has been generated for you in your web browser and is displayed above.", //TODO: please translate
							"singletip2": "<b>To safeguard this wallet</b> you must print or otherwise record the ###Coin address and private key. It is important to make a backup copy of the private key and store it in a safe location. This site does not have knowledge of your private key. If you are familiar with PGP you can download this all-in-one HTML page and check that you have an authentic version from the author of this site by matching the SHA1 hash of this HTML with the SHA1 hash available in the signed version history document linked on the footer of this site. If you leave/refresh the site or press the Generate New Address button then a new private key will be generated and the previously displayed private key will not be retrievable.	Your ###Coin private key should be kept a secret. Whomever you share the private key with has access to spend all the ###Coins associated with that address. If you print your wallet then store it in a zip lock bag to keep it safe from water. Treat a paper wallet like cash.", //TODO: please translate
							"singletip3": "<b>Add funds</b> to this wallet by instructing others to send ###Coins to your ###Coin address.", //TODO: please translate
							"singletip4": "<b>Check your balance</b> by going to blockchain.info or blockexplorer.com and entering your ###Coin address.", //TODO: please translate
							"singletip5": "<b>Spend your ###Coins</b> by going to blockchain.info or mtgox.com and sweep the full balance of your private key into your account at their website. You can also spend your funds by downloading one of the popular ###Coin p2p clients and importing your private key to the p2p client wallet. Keep in mind when you import your single key to a ###Coin p2p client and spend funds your key will be bundled with other private keys in the p2p client wallet. When you perform a transaction your change will be sent to another ###Coin address within the p2p client wallet. You must then backup the p2p client wallet and keep it safe as your remaining ###Coins will be stored there. Satoshi advised that one should never delete a wallet.", //TODO: please translate

							// paper wallet html
							"paperlabelhideart": "Î‘Ï€ÏŒÎºÏÏ…ÏˆÎ· Î³ÏÎ±Ï†Î¹ÎºÎ¿Ï;",
							"paperlabeladdressesperpage": "Î”Î¹ÎµÏ…Î¸ÏÎ½ÏƒÎµÎ¹Ï‚ Î±Î½Î¬ ÏƒÎµÎ»Î¯Î´Î±:",
							"paperlabeladdressestogenerate": "Î Î»Î®Î¸Î¿Ï‚ Î´Î¹ÎµÏ…Î¸ÏÎ½ÏƒÎµÏ‰Î½:",
							"papergenerate": "Î”Î·Î¼Î¹Î¿Ï…ÏÎ³Î¯Î±",
							"paperprint": "Î•ÎºÏ„ÏÏ€Ï‰ÏƒÎ·",
							"paperlabelBIPpassphrase": "Passphrase:", //TODO: please translate
							"paperlabelencrypt": "BIP38 Encrypt?", //TODO: please translate

							// bulk wallet html
							"bulklabelstartindex": "ÎžÎµÎºÎ¯Î½Î·Î¼Î± Î´ÎµÎ¯ÎºÏ„Î·:",
							"bulklabelrowstogenerate": "Î Î»Î®Î¸Î¿Ï‚ ÏƒÎµÎ¹ÏÏŽÎ½:",
							"bulklabelcompressed": "Î£Ï…Î¼Ï€Î¹ÎµÏƒÎ¼Î­Î½ÎµÏ‚ Î´Î¹ÎµÏ…Î¸ÏÎ½ÏƒÎµÎ¹Ï‚;",
							"bulkgenerate": "Î”Î·Î¼Î¹Î¿Ï…ÏÎ³Î¯Î±",
							"bulkprint": "Î•ÎºÏ„ÏÏ€Ï‰ÏƒÎ·",
							"bulklabelcsv": "Î¤Î¹Î¼Î­Ï‚ Ï€Î¿Ï… Ï‡Ï‰ÏÎ¯Î¶Î¿Î½Ï„Î±Î¹ Î¼Îµ ÎºÏŒÎ¼Î¼Î± (CSV):",
							"bulklabelformat": "Î”ÎµÎ¯ÎºÏ„Î·Ï‚,Î”Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ·,Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ (WIF)",
							"bulklabelq1": "Î“Î¹Î±Ï„Î¯ Î½Î± Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î®ÏƒÏ‰ Î Î¿Î»Î»Î±Ï€Î»Î¬ Î Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹Î± ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î¿Ï…;",
							"bulka1": "ÎŸ Ï€Î±ÏÎ±Î´Î¿ÏƒÎ¹Î±ÎºÏŒÏ‚ Ï„ÏÏŒÏ€Î¿Ï‚ Î³Î¹Î± Î½Î± Î´Î­Ï‡ÎµÏƒÏ„Îµ ###Coins ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± ÏƒÎ±Ï‚, Î±Ï€Î±Î¹Ï„ÎµÎ¯ Ï„Î·Î½ ÎµÎ³ÎºÎ±Ï„Î¬ÏƒÏ„Î±ÏƒÎ· ÎºÎ±Î¹ Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¯Î± Ï„Î¿Ï… ÎµÏ€Î¯ÏƒÎ·Î¼Î¿Ï… Î´Î±Î¯Î¼Î¿Î½Î± Ï€ÎµÎ»Î¬Ï„Î· ###Coin (\"###Coind\"). Î‘ÏÎºÎµÏ„Î¬ Ï€Î±ÎºÎ­Ï„Î± Ï†Î¹Î»Î¿Î¾ÎµÎ½Î¯Î±Ï‚ Î´ÎµÎ½ Ï…Ï€Î¿ÏƒÏ„Î·ÏÎ¯Î¶Î¿Ï…Î½ Ï„Î·Î½ ÎµÎ³ÎºÎ±Ï„Î¬ÏƒÏ„Î±ÏƒÎ® Ï„Î¿Ï…. Î•Ï€Î¹Ï€Î»Î­Î¿Î½, Î· ÎµÎºÏ„Î­Î»ÎµÏƒÎ· Ï„Î¿Ï… Ï€ÎµÎ»Î¬Ï„Î· ###Coin ÏƒÏ„Î¿Î½ web server ÏƒÎ±Ï‚ ÏƒÏ…Î½ÎµÏ€Î¬Î³ÎµÏ„Î±Î¹ ÎºÎ±Î¹ Ï„Î· Ï†Î¹Î»Î¿Î¾ÎµÎ½Î¯Î± Ï„Ï‰Î½ Ï€ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŽÎ½ ÏƒÎ±Ï‚ ÎºÎ»ÎµÎ¹Î´Î¹ÏŽÎ½ ÏƒÏ„Î¿Î½ Î¯Î´Î¹Î¿ server, Ï„Î± Î¿Ï€Î¿Î¯Î± Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± Ï…Ï€Î¿ÎºÎ»Î±Ï€Î¿ÏÎ½ Î±Î½ Î¿ server Ï€Î­ÏƒÎµÎ¹ Î¸ÏÎ¼Î± ÎµÏ€Î¯Î¸ÎµÏƒÎ·Ï‚. Î§ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹ÏŽÎ½Ï„Î±Ï‚ Ï„Î± Î Î¿Î»Î»Î±Ï€Î»Î¬ Î Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹Î±, Î±Î½ÎµÎ²Î¬Î¶ÎµÏ„Îµ ÏƒÏ„Î¿Î½ server ÏƒÎ±Ï‚ Î¼ÏŒÎ½Î¿ Ï„Î¹Ï‚ Î´Î¹ÎµÏ…Î¸ÏÎ½ÏƒÎµÎ¹Ï‚ ###Coin ÎºÎ¹ ÏŒÏ‡Î¹ Ï„Î± Ï€ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÎ¬ ÎºÎ»ÎµÎ¹Î´Î¹Î¬. ÎœÎµ Î±Ï…Ï„ÏŒ Ï„Î¿Î½ Ï„ÏÏŒÏ€Î¿ Î´ÎµÎ½ Ï‡ÏÎµÎ¹Î¬Î¶ÎµÏ„Î±Î¹ Î½Î± Î±Î½Î·ÏƒÏ…Ï‡ÎµÎ¯Ï„Îµ Î¼Î®Ï€Ï‰Ï‚ Ï…Ï€Î¿ÎºÎ»Î±Ï€ÎµÎ¯ Ï„Î¿ Ï€Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹ ÏƒÎ±Ï‚.",
							"bulklabelq2": "Î Ï‰Ï‚ Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹ÏŽ Ï„Î± Î Î¿Î»Î»Î±Ï€Î»Î¬ Î Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹Î± Î³Î¹Î± Î½Î± Î´Î­Ï‡Î¿Î¼Î±Î¹ ###Coins ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î¿Ï…;",
							"bulklabela2li1": "Î§ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î®ÏƒÏ„Îµ Ï„Î·Î½ ÎºÎ±ÏÏ„Î­Î»Î± Î Î¿Î»Î»Î±Ï€Î»Î¬ Î Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹Î± Î³Î¹Î± Î½Î± Î´Î·Î¼Î¹Î¿Ï…ÏÎ³Î®ÏƒÎµÏ„Îµ Î­Î½Î±Î½ Î¼ÎµÎ³Î¬Î»Î¿ Î±ÏÎ¹Î¸Î¼ÏŒ Î´Î¹ÎµÏ…Î¸ÏÎ½ÏƒÎµÏ‰Î½ ###Coin (10.000+). Î‘Î½Ï„Î¹Î³ÏÎ¬ÏˆÏ„Îµ ÎºÎ¹ ÎµÏ€Î¹ÎºÎ¿Î»Î»Î®ÏƒÏ„Îµ Ï„Î· Î»Î¯ÏƒÏ„Î± Ï„Ï‰Î½ Ï‡Ï‰ÏÎ¹ÏƒÎ¼Î­Î½Ï‰Î½ Î¼Îµ ÎºÏŒÎ¼Î¼Î± Ï„Î¹Î¼ÏŽÎ½ (CSV) Ï€Î¿Ï… Î´Î·Î¼Î¹Î¿Ï…ÏÎ³Î®Î¸Î·ÎºÎ±Î½, ÏƒÎµ Î­Î½Î± Î±ÏƒÏ†Î±Î»Î­Ï‚ Î±ÏÏ‡ÎµÎ¯Î¿ ÏƒÏ„Î¿Î½ Ï…Ï€Î¿Î»Î¿Î³Î¹ÏƒÏ„Î® ÏƒÎ±Ï‚. Î‘Î½Ï„Î¹Î³ÏÎ¬ÏˆÏ„Îµ Ï„Î¿ Î±ÏÏ‡ÎµÎ¯Î¿ Ï€Î¿Ï… Î´Î·Î¼Î¹Î¿Ï…ÏÎ³Î®ÏƒÎ±Ï„Îµ ÏƒÎµ Î¼Î¹Î± Î±ÏƒÏ†Î±Î»Î® Ï„Î¿Ï€Î¿Î¸ÎµÏƒÎ¯Î±.",
							"bulklabela2li2": "Î•Î¹ÏƒÎ¬Î³ÎµÏ„Îµ Ï„Î¹Ï‚ Î´Î¹ÎµÏ…Î¸ÏÎ½ÏƒÎµÎ¹Ï‚ ###Coin ÏƒÎµ Î­Î½Î±Î½ Ï€Î¯Î½Î±ÎºÎ± Î²Î¬ÏƒÎ·Ï‚ Î´ÎµÎ´Î¿Î¼Î­Î½Ï‰Î½ ÏƒÏ„Î¿Î½ web server ÏƒÎ±Ï‚. (ÎœÎ·Î½ Î±Î½Ï„Î¹Î³ÏÎ¬ÏˆÎµÏ„Îµ Ï„Î± Ï€ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÎ¬ ÎºÎ»ÎµÎ¹Î´Î¹Î¬ Î® Ï„Î¿ Ï€Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹ ÏƒÏ„Î¿Î½ web server Î³Î¹Î±Ï„Î¯ Î´Î¹Î±ÎºÎ¹Î½Î´Ï…Î½ÎµÏÎµÏ„Îµ Î½Î± ÏƒÎ±Ï‚ Ï„Î± ÎºÎ»Î­ÏˆÎ¿Ï…Î½. ÎœÏŒÎ½Î¿ Ï„Î¹Ï‚ Î´Î¹ÎµÏ…Î¸ÏÎ½ÏƒÎµÎ¹Ï‚ ###Coin Ï€Î¿Ï… Î¸Î± ÎµÎ¼Ï†Î±Î½Î¯Î¶Î¿Î½Ï„Î±Î¹ ÏƒÏ„Î¿Ï…Ï‚ Ï€ÎµÎ»Î¬Ï„ÎµÏ‚.)",
							"bulklabela2li3": "Î Î±ÏÎ­Ï‡ÎµÏ„Îµ ÏƒÏ„Î¿ ÎºÎ±Î»Î¬Î¸Î¹ Î±Î³Î¿ÏÏŽÎ½ ÏƒÎ±Ï‚ Î¼Î¹Î± ÎµÏ€Î¹Î»Î¿Î³Î® Î³Î¹Î± Ï€Î»Î·ÏÏ‰Î¼Î® ÏƒÎµ ###Coin. ÎŒÏ„Î±Î½ Î¿ Ï€ÎµÎ»Î¬Ï„Î·Ï‚ ÎµÏ€Î¹Î»Î­Î³ÎµÎ¹ Î½Î± Ï€Î»Î·ÏÏŽÏƒÎµÎ¹ Î¼Îµ ###Coin, Î¸Î± ÎµÎ¼Ï†Î±Î½Î¯ÏƒÎµÏ„Îµ ÏƒÎµ Î±Ï…Ï„ÏŒÎ½ Î¼Î¹Î± Î±Ï€ÏŒ Ï„Î¹Ï‚ Î´Î¹ÎµÏ…Î¸ÏÎ½ÏƒÎµÎ¹Ï‚ Î±Ï€ÏŒ Ï„Î· Î²Î¬ÏƒÎ· Î´ÎµÎ´Î¿Î¼Î­Î½Ï‰Î½, Ï‰Ï‚ Ï„Î·Î½ Â«Ï€ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÎ® Ï„Î¿Ï… Î´Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ· Ï€Î»Î·ÏÏ‰Î¼Î®Ï‚Â» Ï„Î·Î½ Î¿Ï€Î¿Î¯Î± Î¸Î± Î±Ï€Î¿Î¸Î·ÎºÎµÏÏƒÎµÏ„Îµ Î¼Î±Î¶Î¯ Î¼Îµ Ï„Î·Î½ ÎµÎ½Ï„Î¿Î»Î® Î±Î³Î¿ÏÎ¬Ï‚.",
							"bulklabela2li4": "Î¤ÏŽÏÎ± Ï‡ÏÎµÎ¹Î¬Î¶ÎµÏ„Î±Î¹ Î½Î± ÎµÎ¹Î´Î¿Ï€Î¿Î¹Î·Î¸ÎµÎ¯Ï„Îµ Î¼ÏŒÎ»Î¹Ï‚ Î³Î¯Î½ÎµÎ¹ Î· Ï€Î»Î·ÏÏ‰Î¼Î®. Î¨Î¬Î¾Ï„Îµ ÏƒÏ„Î¿ Google Î³Î¹Î± Â«###Coin payment notificationÂ» ÎºÎ¹ ÎµÎ³Î³ÏÎ±Ï†ÎµÎ¯Ï„Îµ ÏƒÎµ Ï„Î¿Ï…Î»Î¬Ï‡Î¹ÏƒÏ„Î¿ Î¼Î¯Î± Ï…Ï€Î·ÏÎµÏƒÎ¯Î± ÎµÎ¹Î´Î¿Ï€Î¿Î¯Î·ÏƒÎ·Ï‚ Ï€Î»Î·ÏÏ‰Î¼Î®Ï‚. Î¥Ï€Î¬ÏÏ‡Î¿Ï…Î½ Î´Î¹Î¬Ï†Î¿ÏÎµÏ‚ Ï…Ï€Î·ÏÎµÏƒÎ¯ÎµÏ‚ Ï€Î¿Ï… Î¸Î± ÏƒÎ±Ï‚ ÎµÎ¹Î´Î¿Ï€Î¿Î¹Î®ÏƒÎ¿Ï…Î½ Î¼Îµ Web Ï…Ï€Î·ÏÎµÏƒÎ¯ÎµÏ‚, API, SMS, Email, ÎºÎ»Ï€. ÎŒÏ„Î±Î½ Î»Î¬Î²ÎµÏ„Îµ Ï„Î·Î½ ÎµÎ¹Î´Î¿Ï€Î¿Î¯Î·ÏƒÎ·, Î· Î¿Ï€Î¿Î¯Î± Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± Î±Ï…Ï„Î¿Î¼Î±Ï„Î¿Ï€Î¿Î¹Î·Î¸ÎµÎ¯ Ï€ÏÎ¿Î³ÏÎ±Î¼Î¼Î±Ï„Î¹ÏƒÏ„Î¹ÎºÎ¬, ÎµÎºÏ„ÎµÎ»ÎµÎ¯Ï„Îµ Ï„Î·Î½ ÎµÎ½Ï„Î¿Î»Î® Ï„Î¿Ï… Ï€ÎµÎ»Î¬Ï„Î·. Î“Î¹Î± Î½Î± ÎµÎ»Î­Î³Î¾ÎµÏ„Îµ Ï‡ÎµÎ¹ÏÎ¿ÎºÎ¯Î½Î·Ï„Î± Ï„Î·Î½ Ï€Î»Î·ÏÏ‰Î¼Î® Î¼Ï€Î¿ÏÎµÎ¯Ï„Îµ Î½Î± Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î®ÏƒÎµÏ„Îµ Ï„Î¿Î½ Block Explorer. Î‘Î½Ï„Î¹ÎºÎ±Ï„Î±ÏƒÏ„Î®ÏƒÏ„Îµ Ï„Î¿ THEADDRESSGOESHERE Î¼Îµ Ï„Î· ###Coin Î´Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ® ÏƒÎ±Ï‚. Î— ÎµÏ€Î¹Î²ÎµÎ²Î±Î¯Ï‰ÏƒÎ· Ï„Î·Ï‚ Ï€Î»Î·ÏÏ‰Î¼Î®Ï‚ ÎµÎ½Î´Î­Ï‡ÎµÏ„Î±Î¹ Î½Î± Î´Î¹Î±ÏÎºÎ­ÏƒÎµÎ¹ Î±Ï€ÏŒ Î´Î­ÎºÎ± Î»ÎµÏ€Ï„Î¬ Î­Ï‰Ï‚ Î¼Î¯Î± ÏŽÏÎ±.<br />http://www.blockexplorer.com/address/THEADDRESSGOESHERE<br /><br />ÎœÏ€Î¿ÏÎµÎ¯Ï„Îµ Î½Î± Î´ÎµÎ¯Ï„Îµ Ï„Î¹Ï‚ ÏƒÏ…Î½Î±Î»Î»Î±Î³Î­Ï‚ Ï€Î¿Ï… Î´ÎµÎ½ Î­Ï‡Î¿Ï…Î½ ÎµÏ€Î¹Î²ÎµÎ²Î±Î¹Ï‰Î¸ÎµÎ¯ ÏƒÏ„Î¿: http://blockchain.info/ <br />Î˜Î± Ï€ÏÎ­Ï€ÎµÎ¹ Î½Î± Î´ÎµÎ¯Ï„Îµ Ï„Î· ÏƒÏ…Î½Î±Î»Î»Î±Î³Î® ÎµÎºÎµÎ¯ ÎµÎ½Ï„ÏŒÏ‚ 30 Î´ÎµÏ…Ï„ÎµÏÎ¿Î»Î­Ï€Ï„Ï‰Î½.",
							"bulklabela2li5": "Î¤Î± ###Coins Î¸Î± ÏƒÏ…ÏƒÏƒÏ‰ÏÎµÏÎ¿Î½Ï„Î±Î¹ Î¼Îµ Î±ÏƒÏ†Î¬Î»ÎµÎ¹Î± ÏƒÏ„Î·Î½ Î±Î»Ï…ÏƒÎ¯Î´Î± Ï„Ï‰Î½ Î¼Ï€Î»Î¿Îº. Î§ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î®ÏƒÏ„Îµ Ï„Î¿ Î±ÏÏ‡Î¹ÎºÏŒ Ï€Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹ Ï€Î¿Ï… Î´Î·Î¼Î¹Î¿Ï…ÏÎ³Î®ÏƒÎ±Ï„Îµ ÏƒÏ„Î¿ Î²Î®Î¼Î± 1 Î³Î¹Î± Î½Î± Ï„Î± Î¾Î¿Î´Î­ÏˆÎµÏ„Îµ.",
							
							// brain wallet html
							"brainlabelenterpassphrase": "Î•Î¹ÏƒÎ¬Î³ÎµÏ„Îµ ÎºÏ‰Î´Î¹ÎºÏŒ: ",
							"brainlabelshow": "Î•Î¼Ï†Î¬Î½Î¹ÏƒÎ·;",
							"brainprint": "Î•ÎºÏ„ÏÏ€Ï‰ÏƒÎ·",
							"brainlabelconfirm": "Î•Ï€Î¹Î²ÎµÎ²Î±Î¹ÏŽÏƒÏ„Îµ Ï„Î¿Î½ ÎºÏ‰Î´Î¹ÎºÏŒ: ",
							"brainview": "Î”Î·Î¼Î¹Î¿Ï…ÏÎ³Î¯Î±",
							"brainalgorithm": "Î‘Î»Î³ÏŒÏÎ¹Î¸Î¼Î¿Ï‚: SHA256(ÎºÏ‰Î´Î¹ÎºÏŒÏ‚)",
							"brainlabelbitcoinaddress": "Î”Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ· ###Coin:",
							"brainlabelprivatekey": "Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ (ÎœÎ¿ÏÏ†Î® ÎµÎ¹ÏƒÎ±Î³Ï‰Î³Î®Ï‚ ÏƒÎµ Ï€Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹):",
							
							// vanity wallet html
							"vanitylabelstep1": "Î’Î®Î¼Î± 1 - Î”Î·Î¼Î¹Î¿Ï…ÏÎ³Î®ÏƒÏ„Îµ Ï„Î¿ Â«Î–ÎµÏÎ³Î¿Ï‚ ÎºÎ»ÎµÎ¹Î´Î¹ÏŽÎ½ Ï„Î¿Ï… Î’Î®Î¼Î±Ï„Î¿Ï‚ 1Â»",
							"vanitynewkeypair": "Î”Î·Î¼Î¹Î¿Ï…ÏÎ³Î¯Î±",
							"vanitylabelstep1publickey": "Î’Î®Î¼Î± 1 Î”Î·Î¼ÏŒÏƒÎ¹Î¿ ÎšÎ»ÎµÎ¹Î´Î¯:",
							"vanitylabelstep1pubnotes": "Î‘Î½Ï„Î¹Î³ÏÎ¬ÏˆÏ„Îµ ÎºÎ¹ ÎµÏ€Î¹ÎºÎ¿Î»Î»Î®ÏƒÏ„Îµ Ï„Î¿ Ï€Î±ÏÎ±Ï€Î¬Î½Ï‰ ÏƒÏ„Î¿ Ï€ÎµÎ´Î¯Î¿ Your-Part-Public-Key ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Ï„Î¿Ï… Vanity Pool.",
							"vanitylabelstep1privatekey": "Step 1 Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯:",
							"vanitylabelstep1privnotes": "Î‘Î½Ï„Î¹Î³ÏÎ¬ÏˆÏ„Îµ ÎºÎ¹ ÎµÏ€Î¹ÎºÎ¿Î»Î»Î®ÏƒÏ„Îµ Ï„Î¿ Ï€Î±ÏÎ±Ï€Î¬Î½Ï‰ Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ ÏƒÎµ Î­Î½Î± Î±ÏÏ‡ÎµÎ¯Î¿ ÎºÎµÎ¹Î¼Î­Î½Î¿Ï…. Î™Î´Î±Î½Î¹ÎºÎ¬, Î±Ï€Î¿Î¸Î·ÎºÎµÏÏƒÏ„Îµ Ï„Î¿ ÏƒÎµ Î­Î½Î±Î½ ÎºÏÏ…Ï€Ï„Î¿Î³ÏÎ±Ï†Î·Î¼Î­Î½Î¿ Î´Î¯ÏƒÎºÎ¿. Î˜Î± Ï„Î¿ Ï‡ÏÎµÎ¹Î±ÏƒÏ„ÎµÎ¯Ï„Îµ Î³Î¹Î± Î½Î± Î±Î½Î±ÎºÏ„Î®ÏƒÎµÏ„Îµ Ï„Î¿ ###Coin Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ ÏŒÏ„Î±Î½ Î²ÏÎµÎ¸ÎµÎ¯ Ï„Î¿ Ï€ÏÏŒÎ¸ÎµÎ¼Î¬ ÏƒÎ±Ï‚ Î±Ï€ÏŒ Ï„Î¿ Vanity Pool.",
							"vanitylabelstep2calculateyourvanitywallet": "Î’Î®Î¼Î± 2 - Î¥Ï€Î¿Î»Î¿Î³Î¯ÏƒÏ„Îµ Ï„Î¿ Vanity Î Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹ ÏƒÎ±Ï‚.",
							"vanitylabelenteryourpart": "Î•Î¹ÏƒÎ¬Î³ÎµÏ„Îµ Ï„Î¿ Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ Ï€Î¿Ï… Î´Î·Î¼Î¹Î¿Ï…ÏÎ³Î®ÏƒÎ±Ï„Îµ ÏƒÏ„Î¿ Î’Î®Î¼Î± 1 ÎºÎ¹ Î±Ï€Î¿Î¸Î·ÎºÎµÏÏƒÎ±Ï„Îµ:",
							"vanitylabelenteryourpoolpart": "Î•Î¹ÏƒÎ¬Î³ÎµÏ„Îµ Ï„Î¿ Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ Î±Ï€ÏŒ Ï„Î¿ Vanity Pool:",
							"vanitylabelnote1": "[Î£Î—ÎœÎ•Î™Î©Î£Î—: Î¤Î¿ Ï€ÎµÎ´Î¯Î¿ Î±Ï…Ï„ÏŒ Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± Î´ÎµÏ‡Î¸ÎµÎ¯ ÎµÎ¯Ï„Îµ Î­Î½Î± Î”Î·Î¼ÏŒÏƒÎ¹Î¿ ÎµÎ¯Ï„Îµ Î­Î½Î± Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯.]",
							"vanitylabelnote2": "[Î£Î—ÎœÎ•Î™Î©Î£Î—: Î¤Î¿ Ï€ÎµÎ´Î¯Î¿ Î±Ï…Ï„ÏŒ Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± Î´ÎµÏ‡Î¸ÎµÎ¯ ÎµÎ¯Ï„Îµ Î­Î½Î± Î”Î·Î¼ÏŒÏƒÎ¹Î¿ ÎµÎ¯Ï„Îµ Î­Î½Î± Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯.]",
							"vanitylabelradioadd": "Î ÏÏŒÏƒÎ¸ÎµÏƒÎµ",
							"vanitylabelradiomultiply": "Î Î¿Î»Î»Î±Ï€Î»Î±ÏƒÎ¯Î±ÏƒÎµ",
							"vanitycalc": "Î¥Ï€Î¿Î»Î¿Î³Î¹ÏƒÎ¼ÏŒÏ‚ Ï„Î¿Ï… Î Î¿ÏÏ„Î¿Ï†Î¿Î»Î¹Î¿Ï Vanity",
							"vanitylabelbitcoinaddress": "Vanity Î”Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ· ###Coin:",
							"vanitylabelnotesbitcoinaddress": "Î Î±ÏÎ±Ï€Î¬Î½Ï‰ ÎµÎ¯Î½Î±Î¹ Î· Î´Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ® ÏƒÎ±Ï‚ Ï€Î¿Ï… Î¸Î± Ï€ÏÎ­Ï€ÎµÎ¹ Î½Î± Ï€ÎµÏÎ¹Î»Î±Î¼Î²Î¬Î½ÎµÎ¹ Ï„Î¿ ÎµÏ€Î¹Î¸Ï…Î¼Î·Ï„ÏŒ Ï€ÏÏŒÎ¸ÎµÎ¼Î±.",
							"vanitylabelpublickeyhex": "Vanity Î”Î·Î¼ÏŒÏƒÎ¹Î¿ ÎšÎ»ÎµÎ¹Î´Î¯ (HEX):",
							"vanitylabelnotespublickeyhex": "Î Î±ÏÎ±Ï€Î¬Î½Ï‰ ÎµÎ¯Î½Î±Î¹ Ï„Î¿ Î”Î·Î¼ÏŒÏƒÎ¹Î¿ ÎšÎ»ÎµÎ¹Î´Î¯ ÏƒÎµ Î´ÎµÎºÎ±ÎµÎ¾Î±Î´Î¹ÎºÎ® Î¼Î¿ÏÏ†Î®. ",
							"vanitylabelprivatekey": "Vanity Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ (WIF):",
							"vanitylabelnotesprivatekey": "Î Î±ÏÎ±Ï€Î¬Î½Ï‰ ÎµÎ¯Î½Î±Î¹ Ï„Î¿ Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ Ï€Î¿Ï… Î¸Î± Ï†Î¿ÏÏ„ÏŽÏƒÎµÏ„Îµ ÏƒÏ„Î¿ Î Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹ ÏƒÎ±Ï‚. ",
							
							// detail wallet html
							"detaillabelenterprivatekey": "Î•Î¹ÏƒÎ¬Î³ÎµÏ„Îµ Ï„Î¿ Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ (Î¿Ï€Î¿Î¹Î±Î´Î®Ï€Î¿Ï„Îµ Î¼Î¿ÏÏ†Î®)",
							"detailview": "Î ÏÎ¿Î²Î¿Î»Î® Î»ÎµÏ€Ï„Î¿Î¼ÎµÏÎµÎ¹ÏŽÎ½",
							"detailprint": "Î•ÎºÏ„ÏÏ€Ï‰ÏƒÎ·",
							"detaillabelnote1": "Î¤Î¿ ###Coin Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ ÎµÎ¯Î½Î±Î¹ Î­Î½Î±Ï‚ Î¼Î¿Î½Î±Î´Î¹ÎºÏŒÏ‚ ÎºÎ±Î¹ Î¼Ï…ÏƒÏ„Î¹ÎºÏŒÏ‚ Î±ÏÎ¹Î¸Î¼ÏŒÏ‚ Ï€Î¿Ï… Î¼ÏŒÎ½Î¿ ÎµÏƒÎµÎ¯Ï‚ Ï€ÏÎ­Ï€ÎµÎ¹ Î½Î± Î³Î½Ï‰ÏÎ¯Î¶ÎµÏ„Îµ, Î¿ Î¿Ï€Î¿Î¯Î¿Ï‚ Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± ÎºÏ‰Î´Î¹ÎºÎ¿Ï€Î¿Î¹Î·Î¸ÎµÎ¯ ÏƒÎµ Ï€Î¿Î»Î»Î­Ï‚ Î´Î¹Î±Ï†Î¿ÏÎµÏ„Î¹ÎºÎ­Ï‚ Î¼Î¿ÏÏ†Î­Ï‚. Î•Î¼Ï†Î±Î½Î¯Î¶Î¿Ï…Î¼Îµ Ï€Î±ÏÎ±ÎºÎ¬Ï„Ï‰ Ï„Î· Î´Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ· ###Coin ÎºÎ±Î¹ Ï„Î¿ Î”Î·Î¼ÏŒÏƒÎ¹Î¿ ÎšÎ»ÎµÎ¹Î´Î¯, Î¼Î±Î¶Î¯ Î¼Îµ Ï„Î¿ Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯, ÏƒÏ„Î¹Ï‚ Ï€Î¹Î¿ Î´Î·Î¼Î¿Ï†Î¹Î»ÎµÎ¯Ï‚ Î¼Î¿ÏÏ†Î­Ï‚  (WIF, HEX, B64, MINI).",
							"detaillabelnote2": "Î¤Î¿ ###Coin v0.6+ Î±Ï€Î¿Î¸Î·ÎºÎµÏÎµÎ¹ Ï„Î± Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÎ¬ ÎšÎ»ÎµÎ¹Î´Î¹Î¬ ÏƒÎµ ÏƒÏ…Î¼Ï€Î¹ÎµÏƒÎ¼Î­Î½Î· Î¼Î¿ÏÏ†Î®. Î¤Î¿ Ï€ÏÏŒÎ³ÏÎ±Î¼Î¼Î± Ï…Ï€Î¿ÏƒÏ„Î·ÏÎ¯Î¶ÎµÎ¹ ÎµÏ€Î¯ÏƒÎ·Ï‚ ÎµÎ¹ÏƒÎ±Î³Ï‰Î³Î® ÎºÎ¹ ÎµÎ¾Î±Î³Ï‰Î³Î® Ï„Ï‰Î½ Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŽÎ½ ÎšÎ»ÎµÎ¹Î´Î¹ÏŽÎ½ Î¼Îµ Ï„Î¹Ï‚ ÎµÎ½Ï„Î¿Î»Î­Ï‚ importprivkey/dumpprivkey. Î— Î¼Î¿ÏÏ†Î® Ï„Î¿Ï… ÎµÎ¾Î±Î³ÏŒÎ¼ÎµÎ½Î¿Ï… Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÎ¿Ï ÎšÎ»ÎµÎ¹Î´Î¹Î¿Ï Ï€ÏÎ¿ÏƒÎ´Î¹Î¿ÏÎ¯Î¶ÎµÏ„Î±Î¹ Î±Ï€ÏŒ Ï„Î¿ Î±Î½ Î· Î´Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ· Î´Î·Î¼Î¹Î¿Ï…ÏÎ³Î®Î¸Î·ÎºÎµ ÏƒÎµ Î­Î½Î± Ï€Î±Î»Î¹ÏŒ Î® Î½Î­Î¿ Ï€Î¿ÏÏ„Î¿Ï†ÏŒÎ»Î¹.",
							"detaillabelbitcoinaddress": "Î”Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ· ###Coin:",
							"detaillabelbitcoinaddresscomp": "Î£Ï…Î¼Ï€Î¹ÎµÏƒÎ¼Î­Î½Î· Î”Î¹ÎµÏÎ¸Ï…Î½ÏƒÎ· ###Coin:",
							"detaillabelpublickey": "Î”Î·Î¼ÏŒÏƒÎ¹Î¿ ÎšÎ»ÎµÎ¹Î´Î¯ (130 Ï‡Î±ÏÎ±ÎºÏ„Î®ÏÎµÏ‚ [0-9A-F]):",
							"detaillabelpublickeycomp": "Î”Î·Î¼ÏŒÏƒÎ¹Î¿ ÎšÎ»ÎµÎ¹Î´Î¯ (Î£Ï…Î¼Ï€Î¹ÎµÏƒÎ¼Î­Î½Î¿, 66 Ï‡Î±ÏÎ±ÎºÏ„Î®ÏÎµÏ‚ [0-9A-F]):",
							"detaillabelprivwif": "Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ WIF<br />51 Ï‡Î±ÏÎ±ÎºÏ„Î®ÏÎµÏ‚ base58, Î¾ÎµÎºÎ¹Î½Î¬ÎµÎ¹ Î¼Îµ",
							"detaillabelprivwifcomp": "Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ WIF<br />Î£Ï…Î¼Ï€Î¹ÎµÏƒÎ¼Î­Î½Î¿, 52 Ï‡Î±ÏÎ±ÎºÏ„Î®ÏÎµÏ‚ base58, Î¾ÎµÎºÎ¹Î½Î¬ÎµÎ¹ Î¼Îµ",
							"detaillabelprivhex": "Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ Î”ÎµÎºÎ±ÎµÎ¾Î±Î´Î¹ÎºÎ® ÎœÎ¿ÏÏ†Î® (64 Ï‡Î±ÏÎ±ÎºÏ„Î®ÏÎµÏ‚ [0-9A-F]):",
							"detaillabelprivb64": "Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ Base64 (44 Ï‡Î±ÏÎ±ÎºÏ„Î®ÏÎµÏ‚):",
							"detaillabelprivmini": "Î ÏÎ¿ÏƒÏ‰Ï€Î¹ÎºÏŒ ÎšÎ»ÎµÎ¹Î´Î¯ ÎœÎ¿ÏÏ†Î® Mini (22, 26 Î® 30 Ï‡Î±ÏÎ±ÎºÏ„Î®ÏÎµÏ‚, Î¾ÎµÎºÎ¹Î½Î¬ÎµÎ¹ Î¼Îµ 'S'):",
							"detaillabelpassphrase": "BIP38 ÎšÏ‰Î´Î¹ÎºÏŒÏ‚",
							"detaildecrypt": "Î‘Ï€Î¿ÎºÏ‰Î´Î¹ÎºÎ¿Ï€Î¿Î¯Î·ÏƒÎ· BIP38"
						}

					}
				};

				ninja.translator.showEnglishJson = function () {
					var english = ninja.translator.translations["en"];
					var spanish = ninja.translator.translations["es"];
					var spanishClone = {};
					for (var key in spanish) {
						spanishClone[key] = spanish[key];
					}
					var newLang = {};
					for (var key in english) {
						newLang[key] = english[key];
						delete spanishClone[key];
					}
					for (var key in spanishClone) {
						if (document.getElementById(key)) {
							if (document.getElementById(key).value) {
								newLang[key] = document.getElementById(key).value;
							}
							else {
								newLang[key] = document.getElementById(key).innerHTML;
							}
						}
					}
					var div = document.createElement("div");
					div.setAttribute("class", "englishjson");
					div.innerHTML = "<h3>English Json</h3>";
					var elem = document.createElement("textarea");
					elem.setAttribute("rows", "15");
					elem.setAttribute("cols", "110");
					elem.setAttribute("wrap", "off");
					var langJson = "{\n";
					for (var key in newLang) {
						langJson += "\t\"" + key + "\"" + ": " + "\"" + newLang[key].replace(/\"/g, "\\\"").replace(/\n/g, "\\n") + "\",\n";
					}
					langJson = langJson.substr(0, langJson.length - 2);
					langJson += "\n}\n";
					elem.innerHTML = langJson;
					div.appendChild(elem);
					document.body.appendChild(div);
				};