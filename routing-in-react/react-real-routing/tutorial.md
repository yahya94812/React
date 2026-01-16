- deploy it in vercel

- Required Vercel configuration for handling client side routing
```
vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

Place this file at the project root.