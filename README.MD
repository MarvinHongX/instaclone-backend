# Instaclone
Instaclone Backend.


# Setup

### git
```
[] git init
[] git remote add origin url
[] npm init -y
[] .gitignore
   - gitignore extension install
   - ctrl + shitf + p
   - node
    
[] git add .
[] git commit -m "1.0 Backend Setup"
[] git push origin master
```

### Apollo Server
```
[] npm install apollo-server graphql
[] npm install nodemon --save-dev
```

### Babel
```
[] npm install --save-dev @babel/core
[] npm install @babel/preset-env --save-dev
[] touch babel.config.json
[] npm install @babel/node --save-dev
```

### Prisma
```
[] npm install prisma --save-dev
[] npx prisma init
```

### Postgres app
```
[] postgres=# create database instaclone;
[] postgres=# \list
```

### Prisma Migrate
```
[] Prisma extension install
[] npx prisma migrate dev
[] SELECT * FROM pg_catalog.pg_tables;
```

### Prisma Studio
```
[] npx prisma studio
```

### graphql-tools
```
[] npm install graphql-tools@latest
[] npm i @graphql-tools/schema @graphql-tools/load-files @graphql-tools/merge
```

### Dotenv
```
[] npm install dotenv
```