# frozen_string_literal: true

module Api
  class TestsController < ApplicationController
    def index
      render json: { message: 'OK' }, status: :ok
    end
  end
end
