from django.shortcuts import render, redirect, get_object_or_404
from .models import Threads
from django.contrib.auth.models import User
from replies.models import Replies

def index(request):
    if request.method == 'POST':
       
        
        title = request.POST['title']
        text = request.POST['text']
        user_id = request.POST['user_id']
        

        user = User.objects.get(id=user_id)
        
        thread = Threads(user=user, title=title, text=text, votes=1)

        thread.save()

        thread_id = thread.id

        return redirect('/thread/'+ str(thread_id))

    threads = Threads.objects.all()

    context = {
        'threads' : threads
    }

    return render(request, 'threads/threads.html', context)

def thread(request, thread_id):
    if request.method == 'POST':
        text = request.POST['text']
        user_id = request.POST['user_id']
        thread_id = request.POST['thread_id']

        user = User.objects.get(id=user_id)
        thread = Threads.objects.get(id=thread_id)
        reply = Replies(user=user, reply_to=thread, text=text, votes=1)

        reply.save()

    thread = get_object_or_404(Threads, pk=thread_id)

    user = User.objects.get(id=1)

    replies = Replies.objects.filter(reply_to=thread)
    
    context = {
        'replies' : replies,
        'thread' : thread
    }

    return render(request, 'threads/thread.html', context)

def search(request):
    return render(request, 'threads/search.html')

def reply(request):
    text = request.POST['text']
    user_id = request.POST['user_id']
    thread_id = request.POST.get('thread_id', 4)

    user = User.objects.get(id=user_id)
    thread = Threads.objects.get(thread_id)
    reply = Replies(user=user, reply_to=thread, text=text, votes=1)

    reply.save()
    

    return redirect('/thread/'+ str(thread_id))

def addThread(request):
    return render(request, 'threads/addThread.html')
