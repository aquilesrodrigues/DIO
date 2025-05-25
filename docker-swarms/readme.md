# Cluster Docker Swarm com Vagrant

Neste projeto básico para cria um cluster Docker Swarm com 4 máquinas virtuais no virtualbox, 
como estudo na DIO.

Irei criar:
- 1 nó **master** (manager)
- 3 nós **node01**, **node02**, **node03** (workers)

## Fluxo de Provisionamento

```mermaid
sequenceDiagram
    participant Master
    participant Node01
    participant Node02
    participant Node03

    Note over Master: Vagrant up
    Master->>Master: Instala Docker
    Master->>Master: Inicializa Swarm (swarm-init.sh)
    Master->>Master: Salva token em /vagrant/swarm-token

    Note over Node01 Node02 Node03: Dependem do Master
    Node01->>Node01: Instala Docker
    Node01->>Node01: Executa swarm-join.sh
    Node02->>Node02: Instala Docker
    Node02->>Node02: Executa swarm-join.sh
    Node03->>Node03: Instala Docker
    Node03->>Node03: Executa swarm-join.sh

    Note over Node01 Node02 Node03: Join Swarm
    Node01->>Master: Conecta-se ao Swarm
    Node02->>Master: Conecta-se ao Swarm
    Node03->>Master: Conecta-se ao Swarm
```

Clonar este repositório em todas as 4 máquinas virtuais criadas

Clone o repositório.

Execute vagrant up para criar as máquinas.

Acesse o master via vagrant ssh master.

Verifique o cluster com docker node ls.

Estrutura de Rede
| Máquina |	     IP      | Papel no Swarm |
| ------- |:------------:|:--------------:|  
| master | 192.168.56.10 | Manager        |
| node01 | 192.168.56.11 | Worker         |
| node02 | 192.168.56.12 | Worker         |
| node03 | 192.168.56.13 | Worker         |
