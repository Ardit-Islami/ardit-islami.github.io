# Dev container for Jekyll + Minimal Mistakes
# - Base: mcr.microsoft.com/devcontainers/jekyll
# - Adds: `just` for task running
FROM mcr.microsoft.com/devcontainers/jekyll:latest

ARG JUST_VERSION=1.36.0
RUN curl --proto '=https' --tlsv1.2 -sSf https://just.systems/install.sh \
    | bash -s -- --to /usr/local/bin