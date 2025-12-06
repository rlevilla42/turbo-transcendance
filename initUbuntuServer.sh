# create first user
adduser userdev
usermod -aG sudo userdev

# configuration ssh
mkdir -p /home/userdev/.ssh
chmod 700 /home/userdev/.ssh
cp /root/.ssh/authorized_keys /home/userdev/.ssh/authorized_keys
chmod 600 /home/userdev/.ssh/authorized_keys
chown -R userdev:userdev /home/userdev/.
chown -R userdev:userdev /home/userdev/.ssh/

# config firewall
sudo apt install ufw -y
sudo ufw allow OpenSSH
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable # and tap y
sudo ufw status

#install docker
sudo apt update
    # certificats SSL for HTTPS and import GPG key for Docker (sécurité)
    sudo apt install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg \
  | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo $VERSION_CODENAME) stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo usermod -aG docker userdev
docker run hello-world

# Install JDK21 for springboot
sudo apt install -y openjdk-21-jdk
