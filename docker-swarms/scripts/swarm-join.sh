#!/bin/bash
# Este arquivo serve apenas nos workers
# Depois que eu gerar o token no master usarei para juntar os workes ao Swarm
while [ ! -f /vagrant/swarm-token ]; do sleep 1; done
TOKEN=$(cat /vagrant/swarm-token)
docker swarm join --token $TOKEN 192.168.56.10:2377