class SignupsController < ApplicationController
    def index 
        render json: Signup.all, status: :ok
    end

    def show 
        signup = Signup.find(params[:id])
        render json: signup, status: :ok 
    end

    def create
        assure_current_user(params[:user_id])
        signup = Signup.new(signup_params)
        if signup.create                       
            render json: signup, status: :created
        else
            render json: signup&.errors || { error: 'Record not found' }, status: :unprocessable_entity 
        end
    end

    def update
        assure_current_user(params[:user_id])
        signup = Signup.find(params[:signup_id])
        if signup&.update(signup_params)                       
            render json: signup, status: :success
        else
            render json: signup&.errors || { error: 'Record not found' }, status: :unprocessable_entity 
        end
    end

    def destroy
        assure_current_user(params[:user_id])
        signup = Signup.find(params[:signup_id])
        if signup&.destroy
            render json: signup, status: :ok
        else
            render json: signup&.errors || { error: 'Record not found' }, status: :unprocessable_entity 
        end
    end

    private 
    
    def signup_params
        # TODO: figure out #permit args
        params.require([:user_id, :sponsorship_id])
    end
end
