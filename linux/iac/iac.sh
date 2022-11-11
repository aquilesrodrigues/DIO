#!/bin/bash

echo "Arquivo IaC para criação de 12 usuários e 3 departamentos"
echo " =========================================================================="
 
echo "Criação dos diretórios dos departamentos - publico, adm, ven, sec em home"
cd /home
mkdir publico adm ven sec

echo "Criação dos grupos dos departamentos"
groupadd GRP_ADM
groupadd GRP_VEN
groupadd GRP_SEC

echo "Atribuição dos grupos as pastas dos departamentos"
chgrp -Rc GRP_ADM adm
chgrp -Rc GRP_VEN ven
chgrp -Rc GRP_SEC sec

echo "criação dos usuários do grupo GRP_ADM(adm), usando senha algorítmo MD5 e sua pasta home"
useradd carlos -m -c "Carlos Dio" -s /bin/bash -G GRP_ADM -p $(openssl passwd -1 Senha123)
useradd maria -m -c "Maria Dio"  -s /bin/bash -G GRP_ADM -p $(openssl passwd -1 Senha123)
useradd joao -m -c "Joao Dio"  -s /bin/bash -G GRP_ADM -p $(openssl passwd -1 Senha123)

echo "Forçando expiração de senhas dos usuários das contas informadas"
passwd carlos -e
passwd maria -e
passwd joao -e

echo "Criação dos usuários do grupo  GRP_VEN(ven), usando senha algorítmo MD5  e sua pasta home"
useradd debora     -m -c "Debora Dio"     -s /bin/bash -G GRP_VEN -p $(openssl passwd -1 Senha123)
useradd sebastiana -m -c "Sebastiana Dio" -s /bin/bash -G GRP_VEN -p $(openssl passwd -1 Senha123) 
useradd roberto    -m -c "Roberto Dio"    -s /bin/bash -G GRP_VEN -p $(openssl passwd -1 Senha123)
echo "Forçando expiração de senhas dos usuários das contas informadas"
passwd debora -e
passwd sebastiana -e
passwd roberto -e

echo "Criação dos usuários do grupo GRP_SEC(sec), usando senha algorítmo MD5  e sua pasta home"
useradd josefina -m -c "Josefina Dio" -s /bin/bash -G GRP_SEC -p $(openssl passwd -1 Senha123)
useradd amanda   -m -c "Amanda Dio"   -s /bin/bash -G GRP_SEC -p $(openssl passwd -1 Senha123)
useradd rogerio  -m -c "Rogerio dio"  -s /bin/bash -G GRP_SEC -p $(openssl passwd -1 Senha123)
echo "Forçando expiração de senhas dos usuários das contas informadas"
passwd josefina -e
passwd amanda -e
passwd rogerio -e

chmod 777 /home/publico
chmod 770 /home/adm 
chmod 770 /home/ven
chmod 770 /home/sec
