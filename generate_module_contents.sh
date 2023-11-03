#!/bin/zsh

# Define the source directory
source_directory="./src"

# Define the output Markdown file
output_file="./project_structure.md"

# Check if the source directory exists
if [ ! -d "$source_directory" ]; then
    echo "Error: Source directory '$source_directory' does not exist"
    exit 1
fi

# Initialize the output Markdown file
echo "# Project Structure" >| "$output_file"

# Function to process a directory
process_directory() {
    local dir="$1"
    local indent="$2"

    # Get the directory name
    local dir_name="$(basename "$dir")"

    # Append the directory name (Header 1) to the Markdown file
    echo -e "${indent}# $dir_name" >> "$output_file"

    # Iterate through files and subdirectories in the directory
    find "$dir" -maxdepth 1 -mindepth 1 | while read -r item; do
        # Check if it's a directory
        if [ -d "$item" ]; then
            # Recursively process subdirectories
            process_directory "$item" "${indent}  "
        elif [ -f "$item" ]; then
            # Get the file name
            local file_name="$(basename "$item")"

            # Get the file extension
            local file_extension="${file_name##*.}"

            # Check if it's not a spec.ts file and not an image file
            if [[ ! "$file_name" == *.spec.ts ]] && [[ ! "$file_extension" =~ ^(jpg|jpeg|png|gif)$ ]]; then
                # Append the file name (Header 2) to the Markdown file
                echo -e "${indent}## $file_name" >> "$output_file"

                # Append the file's content to the Markdown file
                echo -e "${indent}\`\`\`" >> "$output_file"
                cat "$item" >> "$output_file"
                echo -e "${indent}\`\`\`" >> "$output_file"
            fi
        fi
    done
}

# Start processing the source directory
process_directory "$source_directory" ""

# Check if the operation was successful
if [ $? -eq 0 ]; then
    echo "Markdown document generated successfully: $output_file"
else
    echo "Error: Failed to generate Markdown document."
    exit 1
fi

