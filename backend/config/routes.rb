# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    resources :tests, only: %i[index]
  end
end
