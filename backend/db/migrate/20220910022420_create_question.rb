# frozen_string_literal: true

class CreateQuestion < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.text :description, null: false
      t.timestamps
    end
  end
end
