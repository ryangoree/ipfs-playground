# IPFS

### 1. Install

```bash
brew install ipfs
```

### 2. Init

```bash
ipfs init
```

**Example Ouput**

```bash
ryangoree@Ryans-MBP dev % ipfs init
generating ED25519 keypair...done
peer identity: 12D3KooWLb8F8Dfbs9R4Qqcs96GdaVHzKi5RQJEvbHbnvyFiWo1H
initializing IPFS node at /Users/ryangoree/.ipfs
to get started, enter:

	ipfs cat /ipfs/QmQPeNsJPyVWPFDVHb77w8G42Fvo15z4bG2X8D2GhfbSXc/readme
```

### 3. Bring the node online

```bash
ipfs daemon
```

### 4. Try some commands

```bash
ipfs id
ipfs swarm peers
```

### 5. View content

```bash
ipfs cat /ipfs/[CID]/cat.jpg > cat.jpg
```

## Adding Content


### 1. Add

```bash
ipfs add <filepath>
```

This will return the CID.

**Example output**

```bash
ryangoree@Ryans-MBP ipfs % ipfs add index.html
added QmcVXN4GxoXGwZGAX1iFcNgd81NE2pLovfRVzkV1tGEk6Z index.html
 66 B / 66 B [==============================================================================================] 100.00%
```

### 2. View

```bash
ipfs cat /ipfs/ QmcVXN4GxoXGwZGAX1iFcNgd81NE2pLovfRVzkV1tGEk6Z
```



## Resources

https://www.youtube.com/watch?v=PlvMGpQnqOM&ab_channel=HusseinNasser