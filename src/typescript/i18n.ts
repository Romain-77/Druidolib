import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
	lng: "light", // ton par défaut : light = gentil, dark = maléfique
	fallbackLng: "light",
	resources: {
		light: {
			translation: {
				home: {
					hero: {
						title: "Bienvenue sur Druidolib",
					},
					concept: {
						title: "Concept du Druidolib",
						subtitle:
							"Découvrez les fonctionnalités principales de notre annuaire.",
						cards: {
							potion: {
								title: "Potion Prête-à-Livrer",
								description:
									"Avec Druidolib, recevez une potion en un éclair (ou deux si le corbeau/pigeon est fatigué). Idéal pour soigner une toux maléfique !",
							},
							map: {
								title: "Carte interactive des praticiens",
								description:
									"Trouvez en un clin d'œil le Druide, la Sorcière ou le Devin le plus proche. Attention: certaines clairières bougent légèrement selon l'humeur des esprits.",
							},
							payment: {
								title: "Paiement en troc ou en or",
								description:
									"Nos praticiens ont une large préférence pour une chèvre laitière tant qu'elle n'est pas maudite ou invisible. L'or et les pierres précieuses sont également acceptés.",
							},
							prophecy: {
								title: "Consultation de Prophéties",
								description:
									"Besoin d'un aperçu de votre avenir ? Avec Druidolib, obtenez une prophétie fiable à 73,6 % (les 26,4 % restants dépendent de l'alignement des astres, de la position des runes et si vous apportez des cookies au devin).",
							},
							emergency: {
								title: "Urgences Magiques 24/7",
								description:
									"Victime d'un sortilège ? Potion expirée ? Enchantement douteux ? Nos praticiens sont disponibles nuit et jour pour vous aider à rétablir l'équilibre magique (sauf la pleine lune, ils sont un peu occupés).",
							},
							beasts: {
								title: "Suivi médical de vos bêtes",
								description:
									"Un cochon mélancolique, un poulet aphone, une mule qui n'en fait qu'à sa tête... Nos experts savent gérer tous les cas, même les plus enchantés (s'ils existent).",
							},
						},
					},
					contact: {
						kicker: "CONCLAVE DES PRATICIENS",
						title: "Envoyer une missive au cercle",
						intro:
							"Confiez-nous vos maux, visions étranges ou simples curiosités. Les druides, sorcières et devins de Druidolib liront votre message et vous répondront dès que la lune leur en laissera le temps.",
						bullets: {
							pigeon: "tour à pigeons de Brocéliande",
							shout:
								"Hurlez 'Druidolib' plusieurs fois - peut-être que cela ne sera pas tombé dans l'oreille d'un sourd.",
							forest: "Clairière du Vieux Chêne, Royaume de Druidolib",
						},
					},
				},
				about: {
					title: "À propos de Druidolib",
					intro:
						"Druidolib est un annuaire enchanté qui rassemble Druides, Sorcières, Devins et autres praticiens mystiques pour vous accompagner avec bienveillance, humour et un soupçon de magie.",
					faq: {
						title: "Nos questions les plus fréquentes",
						items: {
							q1: {
								question:
									"J'ai vu qu'un Chaman accepte les paiements en chèvres. Est-ce sérieux ?",
								answer:
									"Oui, le troc est courant ! Une chèvre laitière est une monnaie honorable. Vérifiez juste qu'elle ne soit pas ensorcelée, sinon la consultation coûte double !",
							},
							q2: {
								question:
									"Je souffre d'une toux qui fait trembler tout le village. Quel Druide peut me soigner rapidement ?",
								answer:
									"Nos Druides sont les meilleurs ! Ils vous feront une décoction à base de mousse de chêne et de bave de crapaud (on rigole, c'est juste de l'ortie).",
							},
							q3: {
								question:
									"Je me suis cassé la jambe en tombant de mon tas de fumier. La Sorcière peut-elle me soigner sans hurler ?",
								answer:
									"Elle ne hurle pas, elle 'harmonise les os'. Vous oublierez la douleur... et votre nom pendant une heure, grâce au cataplasme magique.",
							},
							q4: {
								question:
									"Les potions des Druides sont-elles buvables, ou faut-il faire semblant ?",
								answer:
									"Elles ont le goût de chaussettes mouillées. Buvez vite, sinon le Druide, vexé, vous donnera une potion encore pire.",
							},
							q5: {
								question:
									"Mon cochon est apathique et refuse de se rouler dans la boue. Est-ce que Druidolib peut le soigner ?",
								answer:
									"Oui ! Nos Druides Vétérinaires soignent le 'Mauvais Œil d'envieux' chez les bêtes. Une infusion de plantain et trois incantations suffiront. Votre porcinet va vite retrouver la boue.",
							},
						},
					},
					testimonials: {
						chatelaine: {
							comment:
								"Mon fils souffrait de la fièvre des marais. J'ai consulté une Sorcière via Druidolib qui m'a préparé une tisane spécifique. Le résultat a été rapide et les instructions étaient très claires. Le système de prise de rendez-vous est très pratique pour les dames qui n'ont pas toujours le temps.",
							author: "Dame Huguette L.",
						},
						forgeron: {
							comment:
								"Mes heures devant l'enclume me donnaient de vives douleurs. J'ai trouvé un Druide spécialisé en massages. Il a utilisé des onguents à base de plantes locales. Le soulagement est notable, même si le prix du transport des herbes fraîches est un peu élevé.",
							author: "Thibault S.",
						},
						manant: {
							comment:
								"J'étais indécis sur l'emplacement de ma nouvelle parcelle. J'ai eu une consultation rapide avec un Devin. Il m'a orienté vers le terrain le plus fertile. Une prédiction simple, mais qui a eu un impact énorme. Je recommande pour les conseils agricoles.",
							author: "Gontran F.",
						},
						musicienne: {
							comment:
								"L'Apothicaire proposé sur le site avait des remèdes excellents contre mes rhumatismes. Par contre, il a mis trois jours à répondre à mon message par pigeon voyageur (j'aurais aimé une réponse plus rapide). Le produit est parfait, l'attente un peu moins.",
							author: "Mélisandre D.",
						},
					},
				},
			},
		},
		dark: {
			translation: {
				home: {
					hero: {
						title: "Bienvenue dans l'aile obscure de Druidolib",
					},
					concept: {
						title: "Les sombres secrets de Druidolib",
						subtitle:
							"Approchez... et découvrez ce que notre annuaire murmure dans l'ombre.",
						cards: {
							potion: {
								title: "Potions dangereusement efficaces",
								description:
									"Recevez une potion si puissante que vos voisins se demanderont si vous êtes encore tout à fait humain. Effets secondaires possibles: propension des cheveux à se transformer en vert.",
							},
							map: {
								title: "Carte des clairières oubliées (et mouvantes)",
								description:
									"Localisez un Druide, une Sorcière ou un Devin... à condition qu'ils acceptent d'être trouvés. Certaines clairières disparaissent quand on pose trop de questions.",
							},
							payment: {
								title: "Paiement en promesses douteuses",
								description:
									"La chèvre laitière reste la norme, mais certains praticiens acceptent aussi l'or, les pierres précieuses ou un service 'à rendre un jour'. Ne signez rien sans lire les petites runes.",
							},
							prophecy: {
								title: "Prophéties traumatisantes",
								description:
									"Nos devins vous diront la vérité... ou ce que les astres hurlent le plus fort. Taux de fiabilité élevé, niveau de remise en question personnelle également.",
							},
							emergency: {
								title: "Urgences Magiques 24/7*",
								description:
									"Sortilège qui part en vrille ? Potion qui explose ? Nous intervenons de jour comme de nuit* (*sauf si nous venons juste de s'endormir, faut pas abuser non plus).",
							},
							beasts: {
								title: "Clinique des bêtes monstrueuses",
								description:
									"Dragons enrhumés, cochons possédés, poulets qui parlent latin... Nos praticiens les examinent tous, parfois avec des gants très, très épais.",
							},
						},
					},
					contact: {
						kicker: "CONCLAVE DES PRATICIENS",
						title: "Laisser un message au cercle... Si vous l'osez",
						intro:
							"Racontez-nous vos malédictions, vos visions nocturnes ou vos ennuis plus ordinaires. Le cercle étudiera votre cas et répondra dès qu'il aura fini de calmer les esprits.",
						bullets: {
							pigeon:
								"tour à pigeons de Brocéliande (fortement bruyante la nuit)",
							shout:
								"Hurlez 'Druidolib' jusqu'à faire frissonner les corbeaux (quelqu'un finira bien par répondre).",
							forest:
								"Clairière du Vieux Chêne, Royaume de Druidolib - si vous trouvez l'entrée, c'est que vous êtes déjà impliqué.",
						},
					},
				},
				about: {
					title: "À propos du cercle obscur de Druidolib",
					intro:
						"Druidolib rassemble les Druides grincheux, Sorcières ironiques et Devins beaucoup trop honnêtes. Nous ne promettons pas de réponses douces, seulement des réponses utiles... et parfois un peu inquiétantes.",
					faq: {
						title: "Les questions qui nous hantent le plus",
						items: {
							q1: {
								question:
									"J'ai vu qu'un Chaman accepte les paiements en chèvres. Est-ce sérieux ?",
								answer:
									"Très. Une chèvre laitière vaut plus que la plupart des pièces de cuivre. Évitez juste les chèvres démoniaques: elles négocient le tarif à votre place.",
							},
							q2: {
								question:
									"Je souffre d'une toux qui fait trembler tout le village. Quel Druide peut me soigner rapidement ?",
								answer:
									"Celui qui ne s'enfuira pas en vous entendant. Nos Druides préparont une décoction si forte que vous tousserez une dernière fois... Par principe, puis plus jamais.",
							},
							q3: {
								question:
									"Je me suis cassé la jambe en tombant de mon tas de fumier. La Sorcière peut-elle me soigner sans me faire hurler ?",
								answer:
									"Elle peut, mais elle ne veut pas. Les hurlements font partie du protocole thérapeutique. Si elle ne crie pas, c'est que tu vas finir unijambiste.",
							},
							q4: {
								question:
									"Les potions des Druides sont-elles buvables, ou faut-il faire semblant ?",
								answer:
									"Elles se boivent... Avec courage. Faire semblant est possible, mais les Druides ont l'œil. Et parfois un familier qui surveille si vous avalez vraiment.",
							},
							q5: {
								question:
									"Mon cochon est apathique et refuse de se rouler dans la boue. Est-ce que Druidolib peut le soigner ?",
								answer:
									"Oui. Nos Druides Vétérinaires excellent dans le traitement des cochons déprimés. Par contre, il se peut qu'il devienne ensuite un peu trop enthousiaste avec la boue. Assumez les éclaboussures.",
							},
						},
					},
					testimonials: {
						chatelaine: {
							comment:
								"Mon fils avait la fièvre des marais. La Sorcière trouvée sur Druidolib lui a préparé une tisane qui a fait baisser la température... et ses mauvaises manières. Je ne sais pas ce qu'il y avait dedans, mais je dors mieux.",
							author: "Dame Huguette L.",
						},
						forgeron: {
							comment:
								"À force de frapper sur l'enclume, mon dos criait vengeance. Un Druide-masseur m'a enduit d'onguents à l'odeur suspecte. La douleur a reculé, mais les cochons du village me suivent partout.",
							author: "Thibault S.",
						},
						manant: {
							comment:
								"J'hésitais entre deux parcelles. Le Devin m'a expliqué que l'une était fertile, l'autre 'maudite mais rentable'. J'ai suivi son conseil. Depuis, mes récoltes sont magnifiques, même si les épouvantails bougent un peu trop.",
							author: "Gontran F.",
						},
						musicienne: {
							comment:
								"L'Apothicaire recommandé par Druidolib a soigné mes rhumatismes avec une pommade miraculeuse. Par contre, ses pigeons ont mis trois jours à me retrouver. Apparemment, mes coordonnées n'étaient pas 'alignées'. Le produit est parfait, sa notion du temps un peu moins.",
							author: "Mélisandre D.",
						},
					},
				},
			},
		},
	},
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
