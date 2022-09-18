# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  namespace :api do
    resources :users, only: %i[] do
      member do
        post :create_score
        get :waypoint_score
        get :total_score
        delete :destroy_score
      end
    end
  end
end
