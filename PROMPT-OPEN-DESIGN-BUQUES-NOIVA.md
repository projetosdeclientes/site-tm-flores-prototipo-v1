# Atualização: Nova subseção "Buquês de Noiva" na página /buques

Olá! Preciso adicionar **5 novos produtos** numa nova subseção **"Buquês de Noiva"** dentro da página `/buques`, posicionada **logo abaixo** da seção "Buquês Mistos". Estou anexando **10 imagens** (2 por produto, na ordem listada abaixo: foto 1 = fundo branco/catálogo, foto 2 = ambientação de casamento).

## 1) Upload das 10 imagens

Subir em `public/products/images/` com **estes nomes exatos**:

| Ordem | Nome do arquivo |
|---|---|
| Foto 1 | `buque-noiva-candura-1.png` |
| Foto 2 | `buque-noiva-candura-2.png` |
| Foto 3 | `buque-noiva-chama-1.png` |
| Foto 4 | `buque-noiva-chama-2.png` |
| Foto 5 | `buque-noiva-sublime-1.png` |
| Foto 6 | `buque-noiva-sublime-2.png` |
| Foto 7 | `buque-noiva-encanto-rosa-1.png` |
| Foto 8 | `buque-noiva-encanto-rosa-2.png` |
| Foto 9 | `buque-noiva-lavanda-real-1.png` |
| Foto 10 | `buque-noiva-lavanda-real-2.png` |

## 2) Adicionar a nova categoria em `src/data/products.ts`

**2.1.** Na interface `Product`, ampliar o tipo de `category` para incluir `'buques-noiva'`:

```ts
category: 'buques' | 'plantas' | 'buques-mistos' | 'buques-noiva' | 'cestas-chocolates';
```

**2.2.** Acrescentar estes 5 objetos **ao final** do array `products`:

```ts
{
  id: "buque-noiva-candura",
  name: "Buquê de Noiva Candura",
  tagline: "Pureza e elegância para o seu grande dia",
  description: "Uma composição nupcial atemporal formada por copos de leite brancos em plena floração, reunidos em um formato redondo e estruturado que exala delicadeza em cada detalhe. Os talos verdes firmes são envolvidos por uma fita de cetim branco impecável, criando um acabamento refinado que harmoniza com qualquer estilo de cerimônia. Ideal para noivas que escolhem a pureza do branco como expressão máxima de um momento único e inesquecível.",
  price: "Sob consulta",
  images: ["/products/images/buque-noiva-candura-1.png", "/products/images/buque-noiva-candura-2.png"],
  category: 'buques-noiva'
},
{
  id: "buque-noiva-chama",
  name: "Buquê de Noiva Chama",
  tagline: "Paixão e vida em cada pétala colorida",
  description: "Um buquê nupcial vibrante e apaixonado que reúne a intensidade das rosas vermelhas com a suavidade das rosas pêssego, enriquecido por astromélias alaranjadas, margaridas brancas delicadas e folhagens verdes exuberantes. A composição redonda e volumosa transmite energia, romantismo e uma beleza que aquece os olhos em qualquer cerimônia. Perfeito para noivas que desejam um buquê ousado, moderno e repleto de personalidade.",
  price: "Sob consulta",
  images: ["/products/images/buque-noiva-chama-1.png", "/products/images/buque-noiva-chama-2.png"],
  category: 'buques-noiva'
},
{
  id: "buque-noiva-sublime",
  name: "Buquê de Noiva Sublime",
  tagline: "Clássico e romântico para celebrar o amor eterno",
  description: "Uma obra-prima floral que combina rosas brancas cremosas em botão com a leveza etérea da gypsophila, criando um conjunto de aparência suave, romântica e verdadeiramente atemporal. A composição generosa e bem estruturada é finalizada com uma fita de cetim branco que une com delicadeza cada haste ao arranjo. Uma escolha clássica e emocionante para noivas que sonham com um casamento elegante e cheio de significado.",
  price: "Sob consulta",
  images: ["/products/images/buque-noiva-sublime-1.png", "/products/images/buque-noiva-sublime-2.png"],
  category: 'buques-noiva'
},
{
  id: "buque-noiva-encanto-rosa",
  name: "Buquê de Noiva Encanto Rosa",
  tagline: "Romantismo suave para um dia de conto de fadas",
  description: "Uma composição delicada e encantadora que reúne rosas rosadas em plena abertura com a nuvem aérea da gypsophila branca, criando um contraste suave e irresistível que remete a um sonho nupcial. As hastes são envolvidas por uma elegante fita de cetim na mesma tonalidade rosada, harmonizando cada detalhe com perfeição. Perfeito para cerimônias românticas e femininas, este buquê é a escolha ideal para quem deseja carregar delicadeza em cada passo até o altar.",
  price: "Sob consulta",
  images: ["/products/images/buque-noiva-encanto-rosa-1.png", "/products/images/buque-noiva-encanto-rosa-2.png"],
  category: 'buques-noiva'
},
{
  id: "buque-noiva-lavanda-real",
  name: "Buquê de Noiva Lavanda Real",
  tagline: "Sofisticação e charme para uma noiva única",
  description: "Uma composição nupcial rica e envolvente que une rosas roxas e malva com rosas brancas cremosas, astromélias pink vibrantes, espigas de lavanda perfumadas e delicados botões de lilás rosado. A paleta em tons de violeta, branco e rosa quente cria uma harmonia sofisticada e incomum que garante um buquê verdadeiramente exclusivo. Pensado para noivas de personalidade marcante e gosto refinado que desejam se destacar com beleza e originalidade.",
  price: "Sob consulta",
  images: ["/products/images/buque-noiva-lavanda-real-1.png", "/products/images/buque-noiva-lavanda-real-2.png"],
  category: 'buques-noiva'
}
```

## 3) Atualizar `src/routes/buques/index.tsx`

Dentro do componente `BuquesPage`, adicionar o filtro e a nova `ProductSection` **abaixo** da seção de "Buquês Mistos":

```tsx
const buquesRosas = products.filter(p => p.category === 'buques');
const buquesMistos = products.filter(p => p.category === 'buques-mistos');
const buquesNoiva = products.filter(p => p.category === 'buques-noiva'); // novo

// ...no JSX, dentro do container:
<ProductSection title="Buquês de Rosas" products={buquesRosas} />
<ProductSection title="Buquês Mistos" products={buquesMistos} />
<ProductSection title="Buquês de Noiva" products={buquesNoiva} /> {/* novo */}
```

## 4) Roteamento

**Nada novo a criar.** A rota dinâmica `src/routes/buques/$slug.tsx` já renderiza `ProductPage`, que lê o produto pelo `id`. Os 5 novos produtos abrirão em `/buques/<id>` automaticamente.

> Se o `ProductCard` mapear o link por categoria literal, garantir que `'buques-noiva'` resolva para `/buques/<id>` (mesma rota base dos demais buquês).

## 5) Validação final

- Acessar `/buques` → conferir a nova seção "Buquês de Noiva" abaixo de "Buquês Mistos" com 5 cards.
- Clicar em cada card → abrir `/buques/<id>` com nome, tagline, descrição, galeria das 2 fotos e botão "Sob consulta" disparando CTA do WhatsApp.
- Validar mobile e desktop.

Obrigado!
