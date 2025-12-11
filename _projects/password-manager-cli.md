---
title: "Password Manager CLI"
description: "A secure Python CLI application for encrypted password management."
image: /assets/images/password-manager-teaser.jpg
date: 2025-05-04
published: published
featured: true
category: "python"
layout: project-page
collection: projects
tags: [Python, CLI, Encryption, Cryptography]
github_url: https://github.com/Ardit-Islami/password-manager-cli/
---

This Python-based Command Line Interface (CLI) password manager securely stores user credentials in an encrypted vault, protected by a master password. It incorporates cryptographic principles with practical, user-friendly CLI commands, providing a robust yet approachable way to manage sensitive data.

### Key Features

- **Secure Encryption**: Uses `cryptography` library (Fernet and PBKDF2HMAC) for secure credential storage.
- **Simple CLI Interface**: Intuitive commands for adding, viewing, and managing stored credentials.
- **Robust Error Handling**: Designed with clear user feedback and error messages to streamline troubleshooting.
- **Data Persistence**: Credential vault data securely stored in JSON format, encrypted and encoded with base64.

### Learning Journey

This project was developed with assistance from AI-powered reasoning tools, specifically Gemini, to conceptualize and structure the encryption logic and CLI architecture.

For complete transparency, you can download the original [AI interaction transcript](https://github.com/Ardit-Islami/password-manager-cli/blob/main/Gemini%20Transcript.txt). Reviewers are encouraged to parse this transcript through an LLM or manually to confirm the appropriate and fair use of AI as an educational and developmental aid.

### Screenshots and Demos

*Coming soon: Terminal screenshots demonstrating the CLI workflow, secure login, credential retrieval, and encryption verification.*

### Example Code Snippet

```python
from cryptography.fernet import Fernet

# Generate encryption key
def generate_key():
    return Fernet.generate_key()

# Encrypt password
def encrypt_password(key, password):
    fernet = Fernet(key)
    return fernet.encrypt(password.encode()).decode()

# Decrypt password
def decrypt_password(key, encrypted_password):
    fernet = Fernet(key)
    return fernet.decrypt(encrypted_password.encode()).decode()
```

### Future Enhancements

- **Graphical Interface (GUI)**: Exploring the addition of a front-end interface for easier use.
- **Packaging**: Planning to package the tool for easier distribution and installation via PyPI.

Feel free to view the full source code and explore the project's development on GitHub.
