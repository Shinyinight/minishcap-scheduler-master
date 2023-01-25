# Minishcap Scheduler

Schedule jobs for minishcap service

## Note

The scheduler show works with [minishcap service](https://github.com/ecmadao/minishcap-service), but it's okay to only run minishcap service without scheduler.

## Prerequisites

- MongoDB
- Redis
- Node

## Jobs

### Clean expired short links

If exists any expired short links, will remove them and free the short id to Redis set.
The minishcap-service will check if there exists any available short id before generate a new one.
