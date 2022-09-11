# frozen_string_literal: true

module Api
  class UsersController < ApplicationController
    protect_from_forgery expect: %i[create_score]

    def create_score
      user.user_scores.create!(user_score_params)
      render json: { success: true }
    rescue => e
      render json: { success: false, message: e.message }
    end

    def waypoint_score
      waypoint_score =
        user
        .user_scores
        .find_by(question_id: params[:question_id], waypoint_status: params[:waypoint_status])
        .score

      render json: { success: true, waypoint_score: }
    rescue => e
      render json: { success: false, message: e.message }
    end

    def total_score
      total_score = user.user_scores.sum(:score)
      render json: { success: true, total_score: }
    rescue => e
      render json: { success: false, message: e.message }
    end

    def destroy_score
      user.user_scores.destroy_all
      render json: { success: true }
    rescue => e
      render json: { success: false, message: e.message }
    end

    private

    def user
      @user ||= User.includes(:user_scores).find(params[:id])
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
