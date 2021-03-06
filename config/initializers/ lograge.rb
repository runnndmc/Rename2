#config/initializers/lograge.rb
require 'lograge/sql/extension'

Rails.application.configure do
  config.lograge.enabled = true

  # Generate log in JSON
  config.lograge.formatter = Lograge::Formatters::Json.new
  config.lograge.custom_options = lambda do |event|
    { :ddsource => ["ruby"],
      :params => event.payload[:params]
    }
  end
end