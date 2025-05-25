#!/bin/bash
# Inicializa o Swarm e salva o token de join
docker swarm init --advertise-addr 192.168.56.10
docker swarm join-token worker -q > /vagrant/swarm-token