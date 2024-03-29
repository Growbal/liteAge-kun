# frozen_string_literal: true

module Api
  class UsersController < ApplicationController
    protect_from_forgery expect: %i[create_score]

    def create
      user = User.create!(user_params)
      user.build_user_authentication(user_authentication_params).save!

      render json: { success: true }
    rescue => e
      render json: { success: false, message: e.message }
    end

    def users_info
      users = User.left_joins(:user_authentication).select('*')
      users_sum_score = User.sum_score

      merged_users = users.map do |user|
        hash = user.attributes
        hash[:score] = users_sum_score[user.id] || 0
        hash
      end

      render json: { success: true, users: merged_users }
    rescue => e
      render json: { success: false, message: e.message }
    end

    def user_info
      render json: { success: true, user: }
    rescue => e
      render json: { success: false, message: e.message }
    end

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

    def user_params
      params.require(:users).permit(:name)
    end

    def user_authentication_params
      params.require(:user_authentications).permit(
        :email,
        :password,
      )
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
