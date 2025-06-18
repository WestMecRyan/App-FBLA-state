To keep your site running **permanently** (even after you disconnect from SSH), you need to run it in **detached mode**:

```bash
# Run in background (detached mode)
docker-compose up -d

# Now your site stays running even if you close your terminal
# Check if it's running
docker-compose ps

# View logs if needed
docker-compose logs frontend

# To stop it later
docker-compose down
```

**With `-d` flag:**
- ✅ Site stays running 24/7
- ✅ You can close your terminal/SSH session
- ✅ Survives server restarts (if you set restart policies)

**To make it restart automatically after server reboots:**Now run:
```bash
docker-compose down
docker-compose up -d --build
```

Your site will now:
- Run in the background
- Restart automatically if the container crashes
- Start automatically when the server reboots
- Stay available at `http://147.182.207.5` permanently

Perfect for production deployment!