source "https://rubygems.org"

gem "jekyll", "~> 4.3"
gem "minimal-mistakes-jekyll", "~> 4.27.1"
gem "rake"
# Ruby 3.4+ no longer ships bigdecimal as a default gem - Liquid/Jekyll still require it internally.
gem "bigdecimal", "~> 3.1"
# For jekyll-feed / Faraday v2 retry middleware
gem "faraday-retry"

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-paginate"
  gem "jekyll-sitemap"

end
