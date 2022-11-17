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
   - ctrl + shift + p
   - node
    
[] git add .
[] git commit -m "1.0 Backend Setup"
[] git push origin master
```

### Apollo Server
```
[] npm install apollo-server graphql
[] touch server.js
[] npm install nodemon --save-dev
```

### Babel
```
[] npm install --save-dev @babel/core
[] npm install @babel/preset-env --save-dev
[] touch babel.config.json
- {
    "presets": ["@babel/preset-env"]
   }
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

# User
```
[] Create Account
- delete prisma, movie folder
- drop database and create database
- npx prisma init
- add User model at schema.prisma
- npm run migrate
- Name of migration: user model
- create users folder (users.mutaions.js, users.queries.js, users.typeDefs.js)
- npm install bcrypt
```

```
[] See Profile
```

```
[] Login
- npm install jsonwebtoken
```


```
[] Edit Profile
```

```
[] Change Avatar (Image Upload)
- npm install express apollo-server-express graphql-upload
- install chrome-extension Altair GraphQL Client
- npm install morgan
```

```
[] Follow User
- add self refrigeration "FollowRelation" to user model at schema.prisma
- npm run migrate
- Name of migration: follows
```

```
[] Unfollow User
```

```
[] See Followers w/ Offset Pagination
[] See Following w/ Cursor-based Pagination
[] Computed Fields
[] Search Users
```

# Photos
```
[] Upload Photo (Parse #)
- add Photo, Hashtag model at schema.prisma
- npm run migrate
- Name of migration: photos model
```

```
[] See Photo
[] See Hashtags
[] Search Photos
[] Edit Photo
[] Like / Unlike Photo
[] See Feed
[] See Photo Likes
[] See Photo Comments
[] Delete Photo
```

# Comments
```
[] Comment on Photo
[] Edit Comment
[] Delete Comment
```

# Extras
```
[] S3 Image Upload
```



# Build

### babel/node 
```
[] You should not be using babel-node in production.
```

### babel CLI
```
[] npm install @babel/cli --dev-only
[] create scr dir
[] "build": "babel src --out-dir build"
[] npm run build
[] "start": "node build/server"
[] npm run start
[] npm install --save-dev @babel/plugin-transform-runtime
[] edit babel.config.json
- {
    "plugins": ["@babel/plugin-transform-runtime"]
   }
[] edit .gitignore
   #build
   /build

```

### heroku CLI
```
[] sign up heroku.com
[] brew tap heroku/brew && brew install heroku
[] heroku login
[] heroku git:remote -a marvininsta
[] 
```
