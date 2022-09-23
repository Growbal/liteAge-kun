# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    resources :users, only: %i[] do
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
  end
end
