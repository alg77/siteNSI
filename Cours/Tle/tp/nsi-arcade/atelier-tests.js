const TESTS = {
  "bataille": {
    "unit": [
      {
        "name": "Créer 52 cartes distinctes",
        "code": "paquet = creer_paquet()\nassert len(paquet) == 52, \"Il faut 52 cartes\"\nassert len(set(paquet)) == 52, \"Les cartes doivent être distinctes\"\nassert set(v for v, c in paquet) == set(range(2, 15)), \"Valeurs attendues : 2 à 14\"\nassert len(set(c for v, c in paquet)) == 4, \"Quatre couleurs attendues\""
      },
      {
        "name": "FIFO et file vide",
        "code": "f = []\nassert est_vide(f) is True\nenfiler(f, (4, \"A\")); enfiler(f, (7, \"B\"))\nassert defiler(f) == (4, \"A\"), \"Défiler doit retirer le plus ancien\"\nassert f == [(7, \"B\")]\ndefiler(f)\ntry:\n    defiler(f)\nexcept ValueError:\n    pass\nelse:\n    raise AssertionError(\"Le contrat exige ValueError sur une file vide\")"
      }
    ],
    "full": [
      {
        "name": "Distribution : conservation des 52 cartes",
        "code": "from collections import Counter\nfor _ in range(10):\n    p = creer_paquet(); original = Counter(p)\n    a, b = distribuer(p)\n    assert len(a) == len(b) == 26\n    assert Counter(a + b) == original, \"Distribution : perte ou duplication\""
      },
      {
        "name": "Un tour gagné conserve l’ordre et les cartes",
        "code": "a = [(14, \"A\"), (2, \"B\")]; b = [(3, \"C\"), (7, \"D\")]; enjeu = []\njouer_tour(a, b, enjeu)\nassert a == [(2, \"B\"), (14, \"A\"), (3, \"C\")], \"Le gagnant enfile Alice puis Bob\"\nassert b == [(7, \"D\")] and enjeu == []"
      },
      {
        "name": "Égalité puis résolution",
        "code": "a = [(8,\"A\"),(2,\"A\"),(12,\"A\"),(4,\"A\")]\nb = [(8,\"B\"),(3,\"B\"),(10,\"B\"),(5,\"B\")]\nenjeu = []\njouer_tour(a,b,enjeu)\nassert len(enjeu)==4 and len(a)==len(b)==2, \"Égalité : comparaison puis une carte cachée chacun\"\njouer_tour(a,b,enjeu)\nassert len(a)==7 and len(b)==1 and enjeu==[], \"Alice gagne tout l’enjeu\""
      }
    ]
  },
  "pyland": {
    "unit": [
      {
        "name": "Créer un visiteur indépendant",
        "code": "a = creer_visiteur(\"A\",0); b = creer_visiteur(\"B\",2,90)\nassert a == {\"nom\":\"A\",\"arrivee\":0,\"satisfaction\":75}\nassert b[\"satisfaction\"] == 90 and a is not b"
      },
      {
        "name": "Ajouter et retirer en FIFO",
        "code": "f=[]\nassert retirer_visiteur(f) is None, \"Le contrat PyLand renvoie None si vide\"\na={\"nom\":\"A\"}; b={\"nom\":\"B\"}\najouter_visiteur(f,a); ajouter_visiteur(f,b)\nassert retirer_visiteur(f) is a and f==[b]"
      },
      {
        "name": "Embarquer une nacelle incomplète",
        "code": "f=[{\"nom\":\"A\",\"arrivee\":2,\"satisfaction\":75}]\np=embarquer(f,2,6)\nassert f==[] and len(p)==1 and p[0][\"attente\"]==4\nassert embarquer([],2,6)==[]"
      },
      {
        "name": "Borner la satisfaction",
        "code": "f=[{\"satisfaction\":3}]; p=[{\"satisfaction\":95}]\nmettre_a_jour(f,p)\nassert f[0][\"satisfaction\"]==0 and p[0][\"satisfaction\"]==100"
      },
      {
        "name": "Moyennes et échantillon de 20",
        "code": "assert statistiques([])==(0,None,None)\ns=[{\"attente\":i,\"satisfaction\":80} for i in range(21)]\nassert statistiques(s)==(20,9.5,80), \"Seuls les 20 premiers comptent\"\nassert len(s)==21, \"Calculer les statistiques ne supprime personne\""
      }
    ],
    "full": [
      {
        "name": "15 tours : conservation, FIFO et attente",
        "code": "f,s=simuler(2,15)\nassert len(f)+len(s)==49, \"4 initiaux + 45 arrivées\"\nassert len(s)==30\nassert [v[\"nom\"] for v in s]==[f\"V{i}\" for i in range(1,31)]\nassert [v[\"attente\"] for v in s[:5]]==[0,0,2,2,4]\nassert all(0<=v[\"satisfaction\"]<=100 for v in f+s)\nassert statistiques(s)[0]==20"
      },
      {
        "name": "Comparer 2 et 4 places à arrivées identiques",
        "code": "f2,s2=simuler(2,15); f4,s4=simuler(4,15)\nassert len(f2)+len(s2)==len(f4)+len(s4)==49\nassert statistiques(s4)[1]<statistiques(s2)[1], \"Sur ce scénario, 4 places réduisent l’attente\"\nassert len(f4)<len(f2)"
      }
    ]
  },
  "snake": {
    "unit": [
      {
        "name": "Calculer la tête sans modifier le corps",
        "code": "s=[(2,2),(2,3)]; avant=s[:]\nassert nouvelle_tete(s,(0,1))==(2,4)\nassert nouvelle_tete(s,(-1,0))==(1,3)\nassert s==avant"
      },
      {
        "name": "Déplacement et croissance",
        "code": "s=[(2,2),(2,3)]\ndeplacer(s,(2,4),False); assert s==[(2,3),(2,4)]\ndeplacer(s,(2,5),True); assert s==[(2,3),(2,4),(2,5)]"
      },
      {
        "name": "Mur, corps et queue libérée",
        "code": "s=[(1,1),(1,2),(2,2),(2,1)]\nassert collision(s,(-1,1),False)\nassert collision(s,(1,2),False)\nassert not collision(s,(1,1),False), \"La queue se libère sans croissance\"\nassert collision(s,(1,1),True)"
      }
    ],
    "full": [
      {
        "name": "Pommes et grille pleine",
        "code": "s=[(r,c) for r in range(TAILLE) for c in range(TAILLE)]\nassert placer_pomme(s) is None\ns.remove((0,0))\nfor _ in range(10):\n    assert placer_pomme(s)==(0,0), \"Il reste une seule case libre\""
      },
      {
        "name": "Enchaîner les déplacements sans perte",
        "code": "s=[(3,1),(3,2),(3,3)]\nfor _ in range(4):\n    t=nouvelle_tete(s,(0,1)); assert not collision(s,t,False)\n    deplacer(s,t,False)\n    assert len(s)==3 and len(set(s))==3\nassert s==[(3,5),(3,6),(3,7)]"
      }
    ]
  },
  "hanoi": {
    "unit": [
      {
        "name": "Coup autorisé",
        "code": "a=[3,2,1];b=[]\nassert deplacer(a,b) is True\nassert a==[3,2] and b==[1]"
      },
      {
        "name": "Coups interdits sans mutation",
        "code": "a=[3,2];b=[1]\nassert deplacer(a,b) is False and a==[3,2] and b==[1]\nassert deplacer([],b) is False and b==[1]\nassert deplacer(a,a) is False and a==[3,2]"
      }
    ],
    "full": [
      {
        "name": "Résoudre de 0 à 5 disques",
        "code": "for n in range(6):\n    a=list(range(n,0,-1));b=[];c=[]\n    hanoi(n,a,b,c)\n    assert a==[] and b==[] and c==list(range(n,0,-1)), f\"Échec pour {n} disques\""
      },
      {
        "name": "Résolution : vérifier chaque mouvement",
        "code": "original_deplacer=deplacer\ncoups=[]\ndef verifier(a,b):\n    assert a and a is not b and (not b or a[-1]<b[-1]), \"Mouvement interdit\"\n    avant=len(a)+len(b)\n    resultat=original_deplacer(a,b)\n    assert len(a)+len(b)==avant\n    coups.append(1)\n    return resultat\ndeplacer=verifier\na=[3,2,1];b=[];c=[]\nhanoi(3,a,b,c)\nassert c==[3,2,1] and a==b==[]\nassert len(coups)==7, \"La stratégie récursive attendue utilise 7 coups\""
      }
    ]
  },
  "escape_nsi": {
    "unit": [
      {
        "name": "Voisins : bornes, murs et ordre",
        "code": "g=[\"...\",\".#.\",\"...\"]\nassert voisins((0,0),g)==[(1,0),(0,1)]\nassert voisins((2,2),g)==[(1,2),(2,1)]"
      },
      {
        "name": "Reconstruire un chemin ou une absence",
        "code": "p={(0,0):None,(0,1):(0,0),(1,1):(0,1)}\nassert reconstruire(p,(1,1))==[(0,0),(0,1),(1,1)]\nassert reconstruire(p,(9,9))==[]"
      }
    ],
    "full": [
      {
        "name": "DFS/BFS : visites distinctes et chemins valides",
        "code": "for mode in (\"pile\",\"file\"):\n    ordre,parents=explorer(LABYRINTHE,DEPART,SORTIE,mode)\n    assert ordre[0]==DEPART and ordre[-1]==SORTIE\n    assert len(ordre)==len(set(ordre)), \"Une case ne doit pas être explorée deux fois\"\n    chemin=reconstruire(parents,SORTIE)\n    assert chemin[0]==DEPART and chemin[-1]==SORTIE\n    for a,b in zip(chemin,chemin[1:]):\n        assert b in voisins(a,LABYRINTHE), \"Pas non adjacent ou mur\"\n    if mode==\"file\": assert len(chemin)-1==13, \"BFS : 13 déplacements dans cette matrice\""
      },
      {
        "name": "Sortie inaccessible",
        "code": "g=[\"#####\",\"#S#E#\",\"#####\"]\nfor mode in (\"pile\",\"file\"):\n    ordre,p=explorer(g,(1,1),(1,3),mode)\n    assert ordre==[(1,1)] and reconstruire(p,(1,3))==[]"
      }
    ]
  }
};
