#!/usr/bin/env bash
set -euo pipefail
urls=(
"https://www.avvenire.it/_ipx/f_webp%26s_1536x864/https%3A/avv-naxos-prod-cdn.azureedge.net/avvenire/stories/2026/06/01/1920x1080/8995fd72-5907-4de3-a937-398d3259649d.jpeg%3Fv%3D1780330646"
"https://www.funtech.pro/assets/img/about-us.jpg"
"https://assets.weforum.org/article/image/i-kPC-iIiB5-BPzxR7OgWbPrJ0i5bn20yOAjgJZbJEA.jpg"
"https://uploads-ssl.webflow.com/642bdec5539cff71f59d0459/644ce03dffa152af429ddc9d_Lake%20Hub_017%20%282%29.jpg"
"https://www.brookings.edu/wp-content/uploads/2022/08/girls-STEM-education-Nigeria.jpg?quality=75"
"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85"
"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"
"https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=85"
"https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85"
"https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
"https://www.unicef.org/cameroon/sites/unicef.org.cameroon/files/styles/hero_tablet/public/UNICEF_CMR_2024_0.jpg.webp"
"https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
)
outdir="public/images/academy/formations"
mkdir -p "$outdir"
i=1
for url in "${urls[@]}"; do
  echo "Downloading ($i/${#urls[@]}): $url"
  ct=$(curl -sI -L "$url" | tr -d '\r' | awk -F": " '/Content-Type:/ {print $2; exit}') || true
  case "$ct" in
    image/jpeg) ext="jpg" ;;
    image/jpg) ext="jpg" ;;
    image/png) ext="png" ;;
    image/webp) ext="webp" ;;
    image/gif) ext="gif" ;;
    *) ext="jpg" ;;
  esac
  filename=$(printf "formation_%02d.%s" "$i" "$ext")
  echo " -> saving as $filename"
  curl -L --fail -s "$url" -o "$outdir/$filename" || echo "Download failed: $url"
  i=$((i+1))
done
