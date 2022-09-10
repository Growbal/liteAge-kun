# frozen_string_literal: true

module Api
  class ScoresController < ApplicationController
    protect_from_forgery expect: :create

    def create
      UserScore.create!(user_score_params)
      render json: { message: 'OK' }, status: :ok
    rescue StandardError => e
      render json: { message: e.message }, status: :internal_server_error
    end

    private

    def user_score_params
      params.permit(
        :user_id,
        :question_id,
        :waypoint_status,
        :score
      )
    end
  end
end
