import csv
# Remplacez 'chemin/vers/votre/fichier.csv' par le chemin réel de votre fichier CSV
with open('cartes.csv', mode='r', encoding='utf-8') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    data_list = list(csv_reader)
html_content = """
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cartes Magic : The Gathering</title>
</head>
<body>
    <h1>Cartes Magic : The Gathering Sélectionnees</h1>
    <div id="cards">
"""
# Dans chaque ligne, remplacez '...' par les valeurs/variables correspondantes
for card in data_list:
    card_html= f"""
    <div class="card">
        <h2>{card['nom']}</h2>
        <img src={card['image']} alt={card['image']} style="width:200px;">
        <p>Edition:{card['edition']}</p>
        <p>Prix:{card['prix']}</p>
        <p><a href={card['lien']}>Voir sur Play-In</a></p>
    </div>
    """
    html_content += card_html  
html_content += """
    </div>
</body>
<html>
"""
with open('cartes_mtg.html', 'w', encoding='utf-8') as html_file:
	html_file.write(html_content) # type: ignore