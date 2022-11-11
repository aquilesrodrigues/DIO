#!/bin/bash

echo "Arquivo IaC para remoção dos 12 usuários e 3 departamentos e seus diretórios"
echo " =========================================================================="
 
echo "Criação dos diretórios dos departamentos - publico, adm, ven, sec em home"
cd /home

echo "Exclusão dos usuários do grupo GRP_ADM(adm), usando senha algorítmo MD5 e sua pasta home"
userdel -f -r carlos 
userdel -f -r maria
userdel -f -r joao
echo "Exclusão dos usuários do grupo  GRP_VEN(ven), usando senha algorítmo MD5  e sua pasta home"
userdel -f -r debora
userdel -f -r sebastiana
userdel -f -r roberto

echo "Exclusão dos usuários do grupo  GRP_SEC(sec), usando senha algorítmo MD5  e sua pasta home"
userdel -f -r josefina
userdel -f -r amanda
userdel -f -r rogerio

echo "Excluir os grupos dos departamentos"
groupdel GRP_ADM
groupdel GRP_VEN
groupdel GRP_SEC

echo "Exclusão forçada das pastas criadas para o IaC."
rm -fr /home/publico
rm -fr /home/adm 
rm -fr /home/ven
rm -fr /home/sec
