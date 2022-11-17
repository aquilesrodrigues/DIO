#!/bin/bash

echo " ==========================================================================" 
echo "Arquivo IaC para provisionar Servidor Web (Apache)"
echo "Versão: 1.o"
echo " =========================================================================="

echo "- Atualizar o linux"
apt-get update
apt-get upgrade -y

echo "- Instalar o apache2"
apt-get install apache2 -y

echo "- instalar o unzip"
apt install unzip

echo "- Criar pasta tmp para baixar aplicação web"
mkdir /var/www/tmp
cd  /var/www/tmp

echo "- Baixar a aplicação do endereço do Denilson Bonatti"
wget https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip
unzip -u main.zip

echo "- Copiar os arquivos da aplicação para diretório do apache"
cp -R linux-site-dio-main/* /var/www/html/

