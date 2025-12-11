# List available commands
default:
    @just --list

# Run the local development server
dev:
    bundle exec jekyll serve --livereload --force_polling

# Install dependencies
setup:
    bundle install

# Build for production (test)
build:
    bundle exec jekyll build

# Clean cache
clean:
    bundle exec jekyll clean
