# frozen_string_literal: true

module Api
  class UsersController < ApplicationController
    protect_from_forgery expect: %i[create_score]

    def create_score
      user.user_scores.create!(user_score_params)
      render json: { success: true }, status: :ok
    rescue => e
      render json: { success: false, message: e.message }, status: :ok
    end

    def total_score
      total_score = user.user_scores.sum(:score)
      render json: { tsuccess: true, otal_score: }, status: :ok
    rescue => e
      render json: { success: false, message: e.message }, status: :ok
    end

    private

    def user
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
