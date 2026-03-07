textos = [
"Bob curto em camadas cria movimento natural e ilumina o rosto.",
"O pixie moderno valoriza o rosto e deixa o visual sofisticado.",
"O short bob com franja lateral suaviza os traços.",
"Camadas curtas texturizadas dão volume ao cabelo.",
"O blunt bob curto cria um visual elegante.",
"O chanel repicado traz movimento e leveza.",
"O pixie alongado combina praticidade e estilo.",
"O bob assimétrico cria um visual fashion.",
"O corte curto com franja cortina rejuvenesce.",
"O mixie é a nova tendência ousada de 2026."
]

with open("template.html") as f:
    template = f.read()

for i in range(1,11):

    page = template.replace("{{NUM}}", str(i))

    if i < 10:
        page = page.replace("{{NEXT}}", str(i+1))
    else:
        page = page.replace("{{NEXT}}", "1")

    page = page.replace("{{TEXTO}}", textos[i-1])

    with open(f"pagina-{i}.html","w") as f:
        f.write(page)

print("Páginas criadas!")
