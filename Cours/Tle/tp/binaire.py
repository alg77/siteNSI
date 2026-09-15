def binaire(a):
    """Convertit un nombre entier a en sa représentation binaire (chaîne de caractères)."""
    if a == 0:
        return '0'
    bin_a = ''
    while a > 0 :
        bin_a = str(a%2) + bin_a
        a = a//2
    return bin_a
