# frozen_string_literal: true

class User::Score < ApplicationRecord
  belongs_to :user
  belongs_to :question

  validates :waypoint_status, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :score, presence: true
end
