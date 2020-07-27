# Bonaparte Challenge

# How to run?

Baixar os datasets em title.basics.tsv e title.ratings.tsv

https://datasets.imdbws.com/


Extrair os arquivos dentro da pasta backend


# Running back-end server

yarn install ou npm install

sudo docker-compose up -d --build // Subindo o mysql

yarn start ou npm start // Rodando o server

adonis migration:run // Rondando a migration para configurar o DB

chmod +x script.py

./script.py // Script que fará a importação dos dados 

OBS: confirme se os arquivos de dataset estão dentro da pasta backend


# Running front-end server 

git clone https://github.com/tugzera/frontend


yarn dev ou npm dev




![GIF](app.gif)

