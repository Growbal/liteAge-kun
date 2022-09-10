# frozen_string_literal: true

module Api
  class UsersController < ApplicationController
    protect_from_forgery expect: :create

    def create_score
      find_user.user_scores.create!(user_score_params)
      render json: { message: 'OK' }, status: :ok
    rescue => e
      render json: { message: e.message }, status: :internal_server_error
    end

    def total_score
      total_score = find_user.user_scores.sum(:score)
      render json: { total_score: }, status: :ok
    rescue => e
      render json: { message: e.message }, status: :internal_server_error
    end

    private

    def find_user
      @user ||= User.find(params[:id])
    end

    def user_score_params
      params.require(:user_scores).permit(
        :question_id,
        :waypoint_status,
        :score,
      )
    end
  end
end
