class UsersController < ApplicationController

    skip_before_action :authorized, only: [:create]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessabble_entity
    
    def show
      if current_user
        render json: current_user, status: :ok
      else
        render json: "No current session stored", status: :unauthorized
      end
    end
  
      def create
        user = User.create(user_params)
          if user.valid?
            session[:user_id] = user.id # piece that logs a user in and keeps track of users info in subsequent requests
            render json: user, status: :ok
          else
            render json: user.errors.full_messages, status: :unprocessable_entity
          end
      end
  
      private
  
      def render_unprocessabble_entity(invalid)
        render json: {error: invalid.record.errors}, status: :unprocessabble_entity
      end
  
      def user_params
        params.permit(:name, :email, :password, :password_confirmation)
      end
  end
