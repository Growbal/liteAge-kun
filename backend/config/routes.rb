# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User::Authentication', at: 'auth'
  namespace :api do
    resources :users, only: %i[create] do
      collection do
        get :users_info
      end

      member do
        get :user_info
        post :create_score
        get :waypoint_score
        get :total_score
        delete :destroy_score
      end
    end

    resources :questions, only: %i[]
  end
end
