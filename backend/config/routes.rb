# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    resources :tests, only: %i[index]
    resources :users, only: %i[] do
      member do
        post :create_score
        get :total_score
      end
    end
  end
end
