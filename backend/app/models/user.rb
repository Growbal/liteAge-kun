# frozen_string_literal: true

class User < ApplicationRecord
  has_many :user_scores, dependent: :restrict_with_error

  has_one :user_authentication, dependent: :destroy

  validates :name, presence: true

  enum gender: { male: 1, female: 2 }

  def self.sum_score
    includes(:user_scores)
      .group(:user_id)
      .sum(:score)
  end
end
