# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    resources :users, only: %i[] do
      member do
        post :create_score
        get :waypoint_score
        get :total_score
      end
    end
  end
end
