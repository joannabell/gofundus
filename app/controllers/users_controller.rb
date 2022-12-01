class UsersController < ApplicationController

    skip_before_action :authorized, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessabble_entity
    
      def show
          user = User.find(session[:user_id])
          render json: user
      end
  
      def create
        user = User.create!(user_params)
        render json: user
      end
  
      private
  
      def render_unprocessabble_entity(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessabble_entity
      end
  
      def user_params
        params.permit(:email, :firstname, :lastname, :password)
      end
  end
