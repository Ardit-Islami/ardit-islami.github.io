---
title: "Password Manager CLI"
description: "A secure Python-based CLI tool for encrypted password storage and retrieval."
image: /assets/images/password-manager-teaser.jpg
date: 2025-05-04
published: published
featured: false
category: "python"
layout: project-page
collection: projects
tags: [Python, CLI, Encryption, Cryptography]
github_url: https://github.com/Ardit-Islami/password-manager-cli/
library_order: 50
nav_order: 50
include_in_project_nav: true
---

### Project Overview

This command-line password manager was built to deepen my understanding of applied cryptography and data security in Python. It allows users to store and retrieve login credentials securely, using a master password and an encrypted vault.

The core goal was to build something practical that I could actually use, while learning how secure applications are structured, especially in environments without graphical interfaces. It also gave me a clean opportunity to practice defensive programming, CLI design, and basic vault encryption workflows.

### Learning Journey

This project helped me step beyond basic scripting into the world of sensitive data handling and encryption logic. I explored:

- How to **securely derive encryption keys** using `PBKDF2HMAC` and salt-based methods.
- When and why to use symmetric encryption with libraries like `Fernet`.
- Designing **a smooth CLI interface** that gives clear feedback and doesn't frustrate the user.
- Structuring Python applications to separate logic (encryption) from interaction (CLI flow).

Most importantly, it taught me to think about user safety — how to anticipate mistakes and design around them.

> This project was developed with structured AI support. You can [review the original Gemini interaction transcript](https://github.com/Ardit-Islami/password-manager-cli/blob/main/Gemini%20Transcript.txt) to see how LLM reasoning was used responsibly as a scaffold.

### Key Features

- Secure encryption using the `cryptography` library with Fernet and key derivation.
- Lightweight JSON-based encrypted vault, encoded with base64.
- Intuitive CLI interface for adding, retrieving, and managing credentials.
- Clear error handling and guardrails for incorrect input or missing files.

### What I’d Do Differently

- Refactor the file structure to support easier testing and modular packaging.
- Add environment variable support for salt and key generation config.
- Expand to support optional 2FA vault unlock or GUI integration.

### Preview

Screenshots and terminal demo coming soon. The tool is currently usable and testable via GitHub.

### Code Snippet

```python
from cryptography.fernet import Fernet

def generate_key():
    return Fernet.generate_key()

def encrypt_password(key, password):
    fernet = Fernet(key)
    return fernet.encrypt(password.encode()).decode()

def decrypt_password(key, encrypted_password):
    fernet = Fernet(key)
    return fernet.decrypt(encrypted_password.encode()).decode()
```    