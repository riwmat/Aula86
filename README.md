# Aula86
Chalange: Changing String Casing Solution

git init
git remote add origin git@github.com:riwmat/Aula86.git
git add .
git commit -m "Primeiro commit"
git push -u origin main


Esse erro acontece porque o remoto tem commits que você ainda não tem localmente (ex.: README criado no GitHub). Siga este passo-a-passo rápido e seguro:

# 1) Confira a branch atual e padronize para main
git branch --show-current
git branch -M main

# 2) Veja/adicione o remoto (ajuste a URL se usar HTTPS)
git remote -v
git remote add origin git@github.com:riwmat/Aula86.git  # se ainda não existir

# 3) Traga o que existe no remoto
git fetch origin

# 4) Rebase (integra os commits do remoto antes de enviar os seus)
git pull --rebase origin main

# (se aparecer conflito)
#   - edite os arquivos marcados com <<<<<<< >>>>>>>
#   - depois:
# git add <arquivos_resolvidos>
# git rebase --continue

# 5) Envie seus commits
git push -u origin main
