
# 📝 **Git & GitHub Commands Cheat Sheet**

## 📌 **Remote Repository Setup**

### **Add remote URL (first time)**

```bash
git remote add origin <repository-url>
```

### **Check current remote URLs**

```bash
git remote -v
```

### **Change existing remote URL**

```bash
git remote set-url origin <new-url>
```

---

## 📌 **Basic Local Git Workflow**

### **Initialize a new repository**

```bash
git init
```

### **Check status**

```bash
git status
```

### **Add files to staging**

```bash
git add .
```

### **Commit changes**

```bash
git commit -m "commit message"
```

---

## 📌 **Working With Branches**

### **Create a branch**

```bash
git branch <branch-name>
```

### **Switch to a branch**

```bash
git checkout <branch-name>
```

### **Create and switch to a branch**

```bash
git checkout -b <branch-name>
```

### **List all branches**

```bash
git branch
```

---

## 📌 **Push & Pull Operations**

### **Push first time to remote**

```bash
git push -u origin main
```

### **Push changes**

```bash
git push origin main
```

### **Pull latest code before pushing**

```bash
git pull origin main
```

### **Pull with unrelated history (if projects differ)**

```bash
git pull origin main --allow-unrelated-histories
```

---

## 📌 **Merge Conflicts Handling**

When conflict occurs:

```
CONFLICT (content): merge conflict in <filename>
```

### **Steps to resolve**

1. Open the file and remove conflict markers:

2. Choose or combine the correct content
3. Stage resolved file:

```bash
git add <filename>
```

4. Commit the merge:

```bash
git commit -m "resolved merge conflict"
```

5. Push final result:

```bash
git push origin main
```

---

## ⚠ **Force Push (Dangerous – overwrites remote content)**

Use only when replacing remote history completely:

```bash
git push origin main --force
```

---

## 📌 **Useful Commands**

### **View commit history**

```bash
git log
```

### **Undo last local commit (keep changes staged)**

```bash
git reset --soft HEAD~1
```

### **Undo last commit & remove changes**

```bash
git reset --hard HEAD~1
```

### **Clone a remote repository**

```bash
git clone <repo-url>
```

---

## 🎯 Recommended Workflow

```bash
git status
git add .
git commit -m "updated"
git pull origin main --allow-unrelated-histories
# resolve conflicts if any
git push origin main
```

Want **PDF version**? 😊
