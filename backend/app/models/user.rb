# frozen_string_literal: true

class User < ApplicationRecord
  has_many :user_scores, dependent: :restrict_with_error

  validates :name, presence: true
end
