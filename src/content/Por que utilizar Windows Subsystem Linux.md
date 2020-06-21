---
title: "Por que utilizar WSL ?"
path: "/blog/subsystem-linux"
date: 2020-06-21
url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQy2GelpVDq6qgoraOPCB0vJXQt3R-e2_1X7Q8l5lFPpM7bv0gz&usqp=CAU"

---
# Por que utilizar Windows Subsystem for Linux?

Muitas vezes precisamos de algumas funcionalidades para desenvolvimento, que são muito mais fácei de fazer ou configurar no linux, que no windows é possivel fazer só que com um pouco mais de dor de cabeça. Mas em contra partida quando temos somento o linux instalado, podemos precisar de alguma aplicação de que não tenha suporte para linux. Então uma boa opção para isso seria utilizar o Windows Subsystem Linux, que está disponível para windows desde as suas últimas versões do windows 10.

Basicamente iremos ter um linux imbutido dentro do nosso windows, de forma nativa, não precisando emular nada.



## Como começar com o WSL:

Passos a serem seguidos

- [x]  Ter windows instalado

- [x]  Abra o PowerShell em Administrador, e execute o seguinte comando:

  ```powershell
  Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
  ```

  > Caso solicite, reinicie o PC.

- [x]  Abra a Microsoft Store. Pesquise por Debian.

- [x]  Após a instalação abra o Debian e insira o seu nome de usuário e senha. (não precisa ser a mesma do windows).

- [x]  rode o comando para a atualizar o sistema. (ele irá pedir a sua senha que você definiu para o Debian).

  ```bash
  sudo apt update && sudo apt upgrade
  ```

- [x]  Após isso instale o git.

  ```bash
  sudo apt install git
  ```

- [x]  pesquise na barra de pesquisa do windows por, substituido o "user" pelo nome do seu usuário do Debian.

  ```bash
  \\\\wsl$\\Debian\\home\\"user"
  ```

- [x]  Depois abra o diretório e arraste para o acesso rápido do Windows



Agora vamos deixar o terminal lindo, pois ninguém merece um workspace feio!!

- [x]  No Debian digite (confirme tudo o que for sendo pedido):

  ```bash
  sudo apt-get install zsh
  ```

- [x]  Instale o wget:

  ```bash
  sudo apt-get install wget
  ```

- [x]  Abra o arquivo .bashrc no VS Code:

  ```bash
  code ~/.bashrc
  ```

- [x]  Na primeira linha adicione, e depois salve e feche o editor:

  ```bash
  # if running in terminal...
  if test -t 1; then
  # ...start zsh
  exec zsh
  fi
  ```

- [x]  Instale o curl:

  ```bash
  sudo apt install curl
  ```

# Agora vamos instalar o Oh My Zsh

- [x]  Para instalar o oh my zsh

  ```bash
  sh -c "$(curl -fsSL <https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh>)"
  ```

> A partir de agora todas configurações que você quer fazer como adicionar variáveis ambientes ou configurar seu terminal de qualquer forma utilize o arquivo ~/.zshrc e não mais o ~/.bash_profile ou derivados.

- [x]  Reinicie seu terminal, e você verá algo diferente.

> Agora vamos instalar o tema drácula

```bash
sudo apt-get install dconf-cli

git clone <https://github.com/dracula/gnome-terminal>

cd gnome-terminal

./install.sh
```

> Selecione 1,  depois YES, 2

# Agora vamos instalar o tema Spaceship

- [x]  Instalando fonte fira code

https://github.com/tonsky/FiraCode/releases/download/2/FiraCode_2.zip

> Extrair e instalar todas as fontes dentro da pasta "ttf"

- [x]  Agora ir em propriedades do Debian e mudar a fonte para "Fira code Retina"

- [x]  Agora instalando tema Spaceship

  ```bash
  cd
  
  git clone <https://github.com/denysdovhan/spaceship-prompt.git> "$ZSH_CUSTOM/themes/spaceship-prompt"
  
  ln -s "$ZSH_CUSTOM/themes/spaceship-prompt/spaceship.zsh-theme" "$ZSH_CUSTOM/themes/spaceship.zsh-theme"
  ```

- [x]  Agora dentro do arquivo ~/.zshrc vamos alterar a variável ZSH_THEME ficando dessa forma(Abra o arquivo com [  code ~/.zshrc  ]):

  ```bash
  ZSH_THEME="spaceship"
  ```

  > Reinicie o Debian.

- [x]  No fim do arquivo ~/.zshrc adiciono o seguinte conteúdo:

  ```bash
  SPACESHIP_PROMPT_ORDER=(
    user          # Username section
    dir           # Current directory section
    host          # Hostname section
    git           # Git section (git_branch + git_status)
    hg            # Mercurial section (hg_branch  + hg_status)
    exec_time     # Execution time
    line_sep      # Line break
    vi_mode       # Vi-mode indicator
    jobs          # Background jobs indicator
    exit_code     # Exit code section
    char          # Prompt character
  )
  SPACESHIP_USER_SHOW=always
  SPACESHIP_PROMPT_ADD_NEWLINE=false
  SPACESHIP_CHAR_SYMBOL="❯"
  SPACESHIP_CHAR_SUFFIX=" "
  ```

# Instalando plugins

```bash
sh -c "$(curl -fsSL <https://raw.githubusercontent.com/zdharma/zinit/master/doc/install.sh>)"
```

- [x]  No fim do arquivo ~/.zshrc adiciono o seguinte conteúdo:

  ```bash
  zinit light zdharma/fast-syntax-highlighting
  zinit light zsh-users/zsh-autosuggestions
  zinit light zsh-users/zsh-completions
  ```

> Após isso reinicie o Debian



Agora vamos instalar tudo o que precisamos para desenvolver nossas aplicações.

- [x]  Configurar o git (irei usar meus dados como exemplo, use os seus quando for fazer!):

  ```bash
  git config --global user.name Prando
  
  git config --global user.email gprando55@gmail.com
  
  git config --global color.ui true
  ```

- [x]  Agora iremos criar uma chave ssh e adicionar em nossa conta do github/gitlab.

  ```bash
  ssh-keygen -t rsa -b 4096 -C gprando55@gmail.com  //vá dando enter até aparecer um quadrinho muito massa;
  
  eval "$(ssh-agent -s)"
  
  ssh-add ~/.ssh/id_rsa
  
  cat ~/.ssh/id_rsa.pub   //Copie a chave que aparecer no terminal, nas configurações do seu github
  ```

  > se tiver duvida, siga meu tutorial de git mais detalhado https://github.com/gprando/guia_Git

- [x]  Agora basta Instalar o que precisamos, esse processo é um pouco chato, porém criei um script que tem boa parte do que uso, e creio que será suficiente para você também.

  https://github.com/gprando/scripts

  > clone e repositório e execute o script:

  ```bash
  git clone <https://github.com/gprando/scripts>
  
  cd scripts
  
  chmod +x *
  
  sudo ./configWSL.sh
  ```

  ## Agora é só ser feliz !