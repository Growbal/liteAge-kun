# frozen_string_literal: true

module Api
  class ScoresController < ApplicationController
    protect_from_forgery expect: :create

    def create
      render json: { message: 'OK' }, status: :ok
    end
  end
end
